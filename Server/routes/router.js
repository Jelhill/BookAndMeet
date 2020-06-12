const express = require("express")
const router = express.Router()


router.get("/home", (req, res) => {
    res.json("Welcome to our App")
}) 
module.exports = router