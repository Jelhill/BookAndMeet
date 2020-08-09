const { validate } = require("jsonschema")
const dataSchema = require("../Schema/userScheme.json")
const bcrypt = require("bcrypt")
const db = require('../config/db')

function Room(data) {
    this.data = data
    this.errors = []
}

Room.prototype.validate = async function(){    
    const cleanData = validate(this.data, dataSchema)
    const { email } =  this.data

    if(!cleanData.valid) {       
        const err = cleanData.errors.map(err => err.stack)
        this.errors = err
        return err
    }

    return cleanData.instance
}

Room.prototype.fetchRoom = function() {
    return new Promise(async (resolve, reject) => {
        await db.query("SELECT * FROM rooms").then((result)=> {
            if(result.rows) {
                resolve({message: "Successful", rooms: result.rows})
            }
        })
        .catch((error) => {
            reject("Unable to fetch Data from database")
        })
    })
}


module.exports = Room