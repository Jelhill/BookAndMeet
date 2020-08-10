const express = require("express")
const router = express.Router()
const userController = require("../Controller/userController")
const adminController = require("../Controller/adminController")
const roomController = require("../Controller/roomController")
const feedbacks = require("../Model/Feedback")
require('dotenv').config()
const verify = require("../middleware/verify")


router.get("/home", (req, res) => {
    res.json("Welcome to our App")
}) 

// GET REQUESTS
router.get("/booking", userController.booking)
router.get("/getRooms", roomController.getRoom)
// POST REQUEST
router.post("/signUp", userController.userSignUp);
router.post("/login", userController.login)
router.post("/addRoom", adminController.addRoom)
router.get("/booking", userController.booking);
router.get("/feedbackComments", userController.feedbackComments);
// POST REQUEST
router.post("/signUp", userController.userSignUp);
router.post("/login", userController.login)
router.post("/feedback", feedbacks.feedBack)

module.exports = router