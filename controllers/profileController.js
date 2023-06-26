
const UserModel = require("../models/userModel")
const mongoose = require("mongoose")
const {ObjectId}=require('mongodb')
const CourseModel = require("../models/courseModel")
const User = require("../models/userModel")

// Получение данных профиля GET
exports.getProfile = async (req, res) => {
    // const {name, surname, email, role}=req.body
    try {
        // Get the user's information from the database
        const user = await UserModel.findById(req.params.id)
        const course = await CourseModel.find({user_id:req.params.id})
        console.log(course)
        console.log(user)
        if (!user) {
            console.log("no user")
            return res.status(404).send("User not found")
        }
        // Render the profile page with the user's name
        res.render("user/profile", { user: user, courses:course })
    } catch (error) {
        console.log(error)
        res.status(500).send("Something went wrong")
    }
}

// Обновление профиля PATCH
exports.updateProfile = async (req, res) => {
    const { name, surname, password} = req.body
    const id = req.params.id
    try {
        const updateUser = await UserModel.findByIdAndUpdate(
            id,
            { name, surname, password },
            { new: true }
        )
        res.redirect(`/profile/${id}`)
    } catch (err) {
        res.status(500).send("error")
        console.log(err)
    }
}

// Фото
// Загрузка фото POST
exports.uploadProfile=async (req,res)=>{
    const {imageName} = req.body
    const image = req.file ? req.file.filename : null;
    const id = req.params.id
    try{
        const uploadImage=await UserModel.findByIdAndUpdate(
            id,
            {imageName , image},
            {new : true}
        )
        uploadImage
            .save()
            .then(()=>res.redirect(`/profile/${id}`))
            .catch(err=>console.log(err))
        console.log("upload: "+uploadImage)
        console.log("image: "+image)
        console.log("imageName: "+imageName)
        console.log("id: "+id)
    }
    catch (err){
        console.log(err)
    }
}
// Получение фото GET
exports.getImage=async(req,res)=>{
    const {imageName, image}=req.body
    const id=req.params.id
    try{
        const user = await UserModel.findById(req.params.id)
        if(!user || !user.image){
            console.log("no image")
        }
        res.set("Content-Type", "image/png")
        res.send(user.image)
    console.log("user.image: "+user.image)
    }
    catch (err){
        console.log(err)
    }
}

// Получение курсов GET
exports.getCourse=async(req,res)=>{
    const {title,description, price, direction} = req.body
    const id=req.params.id
    console.log(id)
    const user_id=id
    const pdf = req.file ? req.file.filename : null
    try{
        const uploadPdf=new CourseModel(
            {title,description,price,direction,pdf, user_id}
        )
        uploadPdf
            .save()
            .then(()=>res.redirect(`/profile/${id}`))
            .catch((err)=>console.log(err))

    }
    catch (err){
        console.log(err)
    }
}


exports.deleteCourse=async(req,res,next)=>{
    try {
        const id = req.params.id
        const user_id = await CourseModel.findOne({_id:id})
        console.log("start:"+user_id.user_id+":end")
        console.log("start:"+user_id+":end")
        const user = await UserModel.findOne({id:Object(user_id.user_id)})
        const courses = await CourseModel.findByIdAndDelete(id)
        if (!courses) {
            return res.status(404).render('error', { message: 'Курс не найден' })
        }
        res.redirect(`/profile/${user_id.user_id}`)
        res.render('user/profile', { courses:courses, user:user })
    } catch (error) {
        next(error)
    }
}
exports.updateCourse=async(req,res,next)=>{
    try {
        const id = req.params.id
        const user_id = await CourseModel.findOne({_id:id})
        console.log("start:"+user_id.user_id+":end")
        console.log("start:"+user_id+":end")
        const { title, description,price,direction } = req.body
        const user = await UserModel.findOne({id:Object(user_id.user_id)})
        const courses = await CourseModel.findByIdAndUpdate(id, { title, description,price,direction},{ new: true })
        res.redirect(`/profile/${user_id.user_id}`)
        res.render('user/profile', { courses:courses, user:user })
    } catch (error) {
        next(error)
    }
}
// Выход POST
exports.logout = (req, res) => {
    try {
        // Clear the cookie on the client
        res.clearCookie("jwt")

        req.session.destroy((err) => {
            if (err) {
                console.log(err)
            } else {
                res.redirect("/login")
            }
        })
        // Send a success response
        res.status(200).json(res.redirect("/"))
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
        console.log(error)
    }
}