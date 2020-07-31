const express = require("express")
const router = express.Router()
const userController = require("../Controller/userController")
require('dotenv').config()
const verify = require("../middleware/verify")

router.get("/home", (req, res) => {
    res.json("Welcome to our App")
}) 

// GET REQUESTS
router.get("/booking", userController.booking)
// POST REQUEST
router.post("/signUp", userController.userSignUp);
router.post("/login", userController.login)

module.exports = router