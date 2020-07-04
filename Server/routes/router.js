const express = require("express")
const router = express.Router()
const userController = require("../Controller/userController")
require('dotenv').config()

router.get("/home", (req, res) => {
    res.json("Welcome to our App")
}) 

router.post("/signUp", userController.userSignUp);
router.post("/login", userController.login)

module.exports = router