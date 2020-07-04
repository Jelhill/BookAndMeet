const { validate } = require("jsonschema")
const dataSchema = require("../Schema/userScheme.json")
const bcrypt = require("bcrypt")
const db = require('../config/db')

function User(data) {
    this.data = data
    this.errors = []
}

User.prototype.validate = function(){    
    const cleanData = validate(this.data, dataSchema)
    if(!cleanData.valid) {       
        const err = cleanData.errors.map(err => err.stack)
        this.errors = err
        return err
    }
    return cleanData.instance
}


User.prototype.signUp = function() {
    return new Promise(async (resolve, reject) => {
        await this.validate()
        if(!this.errors.length){
            const {surname, firstname, phone, gender, username, password, email, confirmPassword} = this.data;
            if(password !== confirmPassword) {
                reject("Password Mismatch")
            }else{
                const salt = bcrypt.genSaltSync(10)
                const hashPassword = bcrypt.hashSync(password, salt)
                
                db.query("INSERT INTO users (surname, firstname, phone, gender, username, password, email) VALUES ($1, $2, $3, $4, $5, $6, $7)", 
                [surname, firstname, phone, gender, username, hashPassword, email])
                resolve("Successfully Updated")
            }           
        }else{
            reject(this.errors)
        }        
    })
}

User.prototype.authenticateUser = function() {
    return new Promise((resolve, reject) => {
        const {username, password} = this.data
            db.query("SELECT * FROM users WHERE username = $1", [username])
            .then((result)=> {
                if(result.length && bcrypt.compareSync(password, result.rows[0].password)){
                    this.data = result
                }
                resolve({message: "Successful", result})
            })
            .catch((err) => {
                reject("incorrect username/password")
            })
    })
}

module.exports = User