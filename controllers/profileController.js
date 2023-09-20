
const UserModel = require("../models/userModel")
const mongoose = require("mongoose")
const {ObjectId}=require('mongodb')
const CourseModel = require("../models/courseModel")
const User = require("../models/userModel")
const bcrypt = require("bcryptjs");

// Получение данных профиля GET
exports.getProfile = async (req, res) => {
    // const {name, surname, email, role}=req.body
    try {
        // Get the user's information from the database
        const users = await UserModel.findById(req.params.id)
        const course = await CourseModel.find({user_id:req.params.id})
        if (!users) {
            return res.status(404).send("User not found")
        }
        // Render the profile page with the user's name
        if (req.cookies.authuser === 'user') {
            res.render("user/profile", {
                users: users,
                courses: course,
                adminlogin: req.cookies.auth,
                userlogin: req.cookies.authuser
            })
        } else{res.redirect('/login')}
    } catch (error) {
        console.log(error)
        res.status(500).send("Something went wrong")
    }
}

// Обновление профиля PATCH
exports.updateProfile = async (req, res) => {
    const { name, surname, lastname, password} = req.body
    const id = req.params.id
    try {
        // Hash the password
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        const updateUser = await UserModel.findByIdAndUpdate(
            id,
            { name, surname, lastname, password:hashedPassword },
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
        res.set("Content-Type", "image/png")
        res.send(user.image)
    }
    catch (err){
        console.log(err)
    }
}

// Получение курсов GET
exports.getCourse=async(req,res)=>{
    const {title,description, price, direction} = req.body
    const id=req.params.id
    const user_id=id
    const pdf = req.file ? req.file.filename : null
    try{
        const users = await UserModel.findById(user_id)
        const fio = (users.surname+' '+users.name+' '+users.lastname)
        const uploadPdf=new CourseModel(
            {fio, title,description,price,direction,pdf, user_id}
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
        const user = await UserModel.findOne({id:Object(user_id.user_id)})
        const courses = await CourseModel.findByIdAndDelete(id)
        if (!courses) {
            return res.status(404).render('error', { message: 'Курс не найден' })
        }
        res.redirect(`/profile/${user_id.user_id}`)
        res.render('user/profile', { courses:courses, user:user, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser })
    } catch (error) {
        next(error)
    }
}
exports.updateCourse=async(req,res,next)=>{
    try {
        const id = req.params.id
        const user_id = await CourseModel.findOne({_id:id})
        const {fio, title, description,price,direction } = req.body
        const user = await UserModel.findOne({id:Object(user_id.user_id)})
        const courses = await CourseModel.findByIdAndUpdate(id, {fio, title, description,price,direction},{ new: true })
        res.redirect(`/profile/${user_id.user_id}`)
        res.render('user/profile', { courses:courses, user:user, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser })
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