const express = require("express")
const app = express()

const multer = require("multer")
const Storage = multer.diskStorage({
    destination:(req,file,cb)=>{cb(null, "./public/uploaded")},
    filename:(req,file,cb)=>{cb(null,file.originalname)}
})
const upload=multer({storage:Storage})
app.set("view engine", "ejs")

module.exports= upload

