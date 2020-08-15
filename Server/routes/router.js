const express = require("express")
const router = express.Router()
const userController = require("../Controller/userController")
const adminController = require("../Controller/adminController")
const roomController = require("../Controller/roomController")
const bookingController = require("../Controller/bookingController")
const feedbacks = require("../Model/Feedback")
require('dotenv').config()
const verify = require("../middleware/verify")


router.get("/home", (req, res) => {
    res.json("Welcome to our App")
}) 

// GET REQUESTS
router.get("/booking", verify, userController.booking)
router.get("/getRooms", roomController.getRoom)
// POST REQUEST
router.post("/signUp", userController.userSignUp);
router.post("/login", userController.login)
router.post("/addRoom", adminController.addRoom)
// router.get("/booking", verify, userController.booking);
router.get("/feedbackComments", userController.feedbackComments);
router.post("/feedback", feedbacks.feedBack)
router.post("/bookRoom", bookingController.bookRoom)

module.exports = router