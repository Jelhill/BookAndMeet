const { validate } = require("jsonschema")
const dataSchema = require("../Schema/userScheme.json")
const bcrypt = require("bcrypt")
const db = require('../config/db')

function User(data) {
    this.data = data
    this.errors = []
}

User.prototype.validate = async function(){    
    const cleanData = validate(this.data,dataSchema)
    if(!cleanData.valid) {       
        const err = cleanData.errors.map(err => err.stack)
        this.errors = err
        return err
    }

    return cleanData.instance
}

User.prototype.checkExistingEmail = async function() {
    return new Promise(async (resolve, reject) => {
        const { email } = this.data
        const userExist = await db.query("SELECT * FROM users WHERE email = $1", [email])
        if(userExist.rowCount > 0) {
            this.errors.push("Email has already been taken")
        }
        resolve()
    })
}

User.prototype.signUp = function() {
    return new Promise(async (resolve, reject) => {      
        await this.validate()
        await this.checkExistingEmail()
        const {surname, firstname, email, password, confirmPassword} = this.data;

        if(!this.errors.length){            
            if(password !== confirmPassword) {
                reject("Password Mismatch")
            }else{
                const salt = bcrypt.genSaltSync(10)
                const hashPassword = bcrypt.hashSync(password, salt)
                db.query("INSERT INTO users (surname, firstname, password, email) VALUES ($1, $2, $3, $4)", 
                [surname, firstname, hashPassword, email])
                resolve("Successfully Updated")
            }           
        }else{
            reject(this.errors)
        }        
    })
}

User.prototype.authenticateUser = function() {
    return new Promise((resolve, reject) => {
        const {email, password} = this.data
        if(!email) this.errors.push("Email is required")
        if(!password) this.errors.push("Password is required")
        if(this.errors.length) {
            reject(this.errors)
            return
        }
        db.query("SELECT * FROM users WHERE email = $1", [email])
        .then((result) => {
            if(!result.rows.length) {
                reject("Username/password mismatch")
                return
            }
            if(result && bcrypt.compareSync(password, result.rows[0].password)){
                this.data = result
                resolve({message: "Successful", result: result.rows[0]})
            }
        })
        .catch((err) => {
            reject(err)
        })
    })
}

User.prototype.getUserById = function() {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM users WHERE id = $1", [this.data])
        .then(response => {
            console.log(response.rows[0]);
            resolve(response.rows[0])
        })
        .catch(error => reject(error))
    })
}
module.exports = User