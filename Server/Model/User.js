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
            const {surname, firstname, email, password, confirmPassword} = this.data;
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
            db.query("SELECT * FROM users WHERE email = $1", [email])
            .then((result) => {
                if(result && bcrypt.compareSync(password, result.rows[0].password)){
                    this.data = result
                    console.log("Fire", this.data)
                    resolve({message: "Successful", result})
                }
                else{
                    reject("username/password mismatch")
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}



module.exports = User