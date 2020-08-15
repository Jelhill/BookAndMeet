const { validate } = require("jsonschema")
const dataSchema = require("../Schema/userScheme.json")
const bcrypt = require("bcrypt")
const db = require('../config/db')

function Admin(data) {
    this.data = data
    this.errors = []
}

Admin.prototype.validate = async function(){    
    const cleanData = validate(this.data, dataSchema)
    const { email } =  this.data

    if(!cleanData.valid) {       
        const err = cleanData.errors.map(err => err.stack)
        this.errors = err
        return err
    }

    return cleanData.instance
}

Admin.prototype.checkExistingEmail = function() {
    return new Promise(async (resolve, reject) => {
        const { email } = this.data
        const userExist = await db.query("SELECT * FROM users WHERE email = $1", [email])
        if(userExist.rowCount > 0) {
            this.errors.push("Email has already been taken")
        }
        resolve()
    })
}

Admin.prototype.addRoom = function() {
    return new Promise(async (resolve, reject) => {      
        const now = new Date()  
        const todaysDate = `${now.getDay()}/${now.getMonth() + 1}/${now.getFullYear()}`
        const {type, location, capacity, name, available, hasProjector, hasAirCondition, hasWaterDispenser, hasWhiteBoard, secure_url} = this.data;
        if(!this.errors.length){            
            db.query("INSERT INTO rooms (type, location, capacity, name, isavailable, hasprojector, hasaircondition, haswaterdispenser, haswhiteboard, imageurl, datecreated) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", 
            [type, location, capacity, name, available, hasProjector, hasAirCondition, hasWaterDispenser, hasWhiteBoard, secure_url, todaysDate])
            resolve("Successfully Updated")
        }else{
            console.log("This Errors", this.errors)
            reject(this.errors)
        }        
    })
}
Admin.prototype.authenticateUser = function() {
    return new Promise((resolve, reject) => {
        const {email, password} = this.data
            db.query("SELECT * FROM users WHERE email = $1", [email])
            .then((result) => {
                if(result && bcrypt.compareSync(password, result.rows[0].password)){
                    this.data = result
                    resolve({message: "Successful", result: result.rows[0]})
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



module.exports = Admin