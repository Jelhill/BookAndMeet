const User = require("../Model/User")
const jwt = require("jsonwebtoken")
const db = require('../config/db')
const SECRET = process.env.JWT_SECRET


exports.userSignUp = (req, res) => {
    const user = new User(req.body)
    user.signUp()
    .then((result) => {
        res.json({message: "Registered Successfully"})
    })
    .catch((error) => {res.json({message: error})})
}
// exports.adminSignUp = (req, res) => {
//     const user = new User(req.body)
//     user.adminsignUp()
//     .then((result) => {
//         console.log(result)
//         res.json({message: "Registered Successfully"})
//     })
//     .catch((error) => {res.json({message: error})})
// }

exports.login = (req, res) => {
    const user = new User(req.body)
    user.authenticateUser().then((response) => {
        console.log(response)
        const payload = {
            id: response.result.id,
            firstname: response.result.firstname
        }

        jwt.sign(response.result, SECRET, (err, token) => {
            if(err) res.send({message: "Failed"})
            res.send({message: "success", token, payload, response: response.result})
        })

    }).catch((err) => {
        console.log(err);
        res.send({message: err})
    })
}


exports.feedbackComments = async(req,res,next)=>{
    try{
          const comments= await db.query("SELECT firstname,lastname,comments FROM feedbacks");
          console.log(comments.rows);
          return res.json(comments.rows);
    }
    catch(err){
        return next(err);
    }
}

exports.getUser = (req, res, next) => {
    const user = new User(req.params.id)
    user.getUserById()
    .then(data => res.send({status: "success", data}))
    .catch(error => res.send({status: "error", message: error}))
}
