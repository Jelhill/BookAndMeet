const Room = require("../Model/Room")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET


exports.getRoom = (req, res) => {
    const room = new Room(req.body)
    room.fetchRoom()
    .then((result) => {
        res.send({message: "Room Added Successfully", rooms: result.rooms})})
    .catch((error) => {res.send({message: error})})
}
