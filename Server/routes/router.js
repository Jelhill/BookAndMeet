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
        const result = await db.query("INSERT into users (surname,firstname,othername,email,username,password,gender,imageurl) VALUES($1,$2,$3,$4,$5,$6,$7,$8) returning *",[
            surname,firstname,othername,email,username,password,gender,imageUrl
        ]);
        console.log('>>>>>>',result)
        const {surname,firstname,othername,email, username,password,gender} = req.body
        console.log(req.body)
        const result = await db.query("INSERT into users (surname,firstname,othername,email, username,password,gender) VALUES ($1,$2,$3,$4,$5,$6,$7)",
        [surname,firstname,othername,email, username,password,gender]);
        res.json(result.rows[0])
    }
    catch(e){
next(e)
    }
});


module.exports = router