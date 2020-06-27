// const cloudinary = require("cloudinary");
// const cloudinary = require("../config/cloudinary")
// const cloudinaryStorage = require("multer-storage-cloudinary");
// const multer = require("multer");

// const storage = cloudinaryStorage({ 
//     cloudinary: cloudinary,
//     folder: "bookAndMeet",
//     allowedFormats: ["jpg", "png"],
//     transformation: [{ width: 300, height: 300, crop: "limit" }]
// });

// const storage = multer.diskStorage({
//     filename: function(req, file, callBack){
//         callBack(null, Date.now() + file.originalname)
//     }
// })

// const parser = multer({ storage: storage });

// var multer = require('multer');

//multer.diskStorage() creates a storage space for storing files. 
// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
//             cb(null, './files/images/');
//         }else{
//             cb({message: 'this file is neither a video or image file'}, false)
//         }
//     },
//     filename: function(req, file, cb){
//     cb(null, file.originalname);    
//     }
// })
// var upload = multer({storage:storage});
// module.exports = upload;

// module.exports = parser




