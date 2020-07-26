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
        const payload = {
            firstname: response.result.rows[0].firstname
        }
        jwt.sign(payload, SECRET, {expiresIn: "120s"}, (err, token) => {
            if(err) res.send({message: "Failed"})
            res.send({message: "success", token})
        })

    }).catch((err) => {
        res.send({message: err})
    })
}


exports.booking = (req, res) => {
    res.send({message: true})
}