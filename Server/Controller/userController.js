const User = require("../Model/User")

exports.userSignUp = (req, res) => {
    const user = new User(req.body)
    console.log("Body", req.body)
    user.signUp().then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    res.send("Helloo")
}