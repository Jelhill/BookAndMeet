const User = require("../Model/User")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET


exports.userSignUp = (req, res) => {
    const user = new User(req.body)
    user.signUp()
    .then((result) => {res.json({message: "Registered Successfully"})})
    .catch((error) => {res.json({message: error})})
}

exports.login = (req, res) => {
    const user = new User(req.body)
    user.authenticateUser().then((response) => {
        console.log(response.result.rows[0])
        const payload = {
            username: response.result.rows[0].username
        }
        jwt.sign(payload, SECRET, {expiresIn: "60s"}, (err, token) => {
            if(err) res.send({message: "Failed"})
            res.send({message: "Success", token})
        })

    }).catch((err) => {
        res.send({message: err})
    })
}