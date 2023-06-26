const express = require("express")
const app = express()

const multer = require("multer")
const Storage = multer.diskStorage({
    destination:(req,file,cb)=>{cb(null, `./public/pdf`)},
    filename:(req,file,cb)=>{cb(null,file.originalname)}
})
const uploads=multer({storage:Storage})
app.set("view engine", "ejs")

module.exports= uploads

