const express = require("express")
const router = express.Router()
const multer = require("multer")
const cloudinary = require("cloudinary");
require('dotenv').config()

const storage = multer.diskStorage({
    filename: function(req, file, callback) {
        callback(null, Date.now() + file.originalname)
    }
})

const imageFilter = function(req, file, callback) {
    if (!file.mimetype === "image/jpg" || !file.mimetype === "image/png") {
        callback(null, true)
    }else{
        callback(null, false)
    }
}

const parser = multer({storage, imageFilter})

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

router.get("/home", (req, res) => {
    res.json("Welcome to our App")
}) 

router.post("/signUp", async (req, res, next) => {
    try{ 
        const {surname,firstname,othername,email,username,password,gender,imageUrl} = req.body
        const result = await db.query("INSERT into users (surname,firstname,othername,email,username,password,gender,imageurl) VALUES($1,$2,$3,$4,$5,$6,$7,$8) returning *",[
            surname,firstname,othername,email,username,password,gender,imageUrl
        ]);
        // console.log('>>>>>>',result)
        // const {surname,firstname,othername,email, username,password,gender} = req.body
        // console.log(req.body)
        // const result = await db.query("INSERT into users (surname,firstname,othername,email, username,password,gender) VALUES ($1,$2,$3,$4,$5,$6,$7)",
        // [surname,firstname,othername,email, username,password,gender]);
        res.json(result.rows[0])
    }
    catch(e){
next(e)
    }
});

router.post("/imageLoader", parser.single("image"), (req, res, next) => {
    const { name, image } = req.body
    cloudinary.uploader.upload(image)
    .then((result) => {
        console.log(result)
      res.status(200).send({
        message: "success",
        result,
      });
    }).catch((error) => {
      res.status(500).send({
        message: "failure",
        error,
      });
    });
})


module.exports = router