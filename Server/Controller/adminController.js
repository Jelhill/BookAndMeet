const Admin = require("../Model/Admin")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET


exports.addRoom = (req, res) => {
    const admin = new Admin(req.body)
    admin.addRoom()
    .then((result) => {res.json({message: "Room Added Successfully"})})
    .catch((error) => {res.json({message: error})})
}
exports.editRoom = (req, res) => {
    const editBoard = new Admin(req.body)
    editBoard.editRoom()
    .then((result) => {res.json({message: "Room Edited Successfully"})})
    .catch((error) => {res.json({message: error})})
}
