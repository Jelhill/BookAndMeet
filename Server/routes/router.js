const express = require("express")
const router = express.Router()
const db = require('../config/db')
require("dotenv").config()




router.get("/home", (req, res) => {
    res.json("Welcome to our App")
}) 

router.post("/signUp", async (req, res, next) => {
    try{ 
        const {surname,firstname,othername,email,username,password,gender,imageUrl} = req.body
        const result = await db.query("INSERT into users (surname,firstname,othername,email,username,password,gender,imageUrl) VALUES($1,$2,$3,$4,$5,$6,$7,$8) returning *",[
            surname,firstname,othername,email,username,password,gender,imageUrl
        ]);
        res.json(result.rows[0])
    }
    catch(e){
next(e)
    }
});


module.exports = router