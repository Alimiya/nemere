const User = require('../models/userModel')
const Course = require('../models/courseModel')
const Help = require('../models/helpModel')
// Получение всех пользователей
exports.getUsers = async (req, res, next) => {
    try {
        let sort = {}
        if (req.query.sort === 'name') {
            sort = { name: 1 }
        } else if (req.query.sort === 'surname') {
            sort = { surname: 1 }
        }

        const users = await User.find().sort(sort)
        if (req.cookies.auth === 'true') {
            res.render('user/admin', {users, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser})
        } else {
            res.redirect('/login')
        }
    } catch (error) {
        next(error)
    }
}


// Добавление пользователя
exports.createUser = async (req, res, next) => {
    try {
        const { name, surname, lastname, email, password, experience } = req.body
        const users = new User({ name, surname, lastname, email, password, experience })
        await users.save()
        res.redirect('/admin/users')
        res.render('user/admin', { users })
    } catch (error) {
        next(error)
    }
}

// Удаление пользователя
exports.deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id
        const users = await User.findByIdAndDelete(userId)
        if (!users) {
            return res.status(404).render('error', { message: 'Пользователь не найден' })
        }
        res.redirect('/admin/users')
        res.render('user/admin', { users })
    } catch (error) {
        next(error)
    }
}
exports.updateUserAi = async (req,res)=>{
    try{
        const userId=req.params.id
        const {name, surname, lastname, email, password, experience} =req.body
        const users=await User.findOne(userId,{name,surname,lastname,email,password, experience})
        res.render('components/editForm',{users})
    } catch(err){
        console.log(err)
    }
}

// Обновление пользователя
exports.updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id

        const { name, surname, lastname, email, password, experience } = req.body

        // Проверка на уникальность email
        const existingUser = await User.findOne({ email })
        if (existingUser && existingUser._id.toString() !== userId) {
            return res.status(400).json({ error: 'Email already exists' })
        }

        const users = await User.findByIdAndUpdate(userId, { name, surname, lastname, email, password, experience },{ new: true })
        res.redirect('/admin/users')
        res.render('user/admin', { users })
    } catch (error) {
        next(error)
    }
}

exports.getCourses = async (req,res,next)=>{
    try{
        const courses = await Course.find()
        if (req.cookies.auth === 'true') {
            res.render('user/adminCourse', {courses, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser})
        } else {
            res.redirect('/login')
        }
    }catch (err){
        next(err)
    }
}

exports.deleteCourse = async (req, res)=> {
    try {
        const courseId = req.params.id
        const course = await Course.findByIdAndDelete(courseId)
        if (!course) {
            return res.status(404).render('error', { message: 'Запрос не найден' })
        }
        res.redirect('/admin/courses')
    } catch (error) {
        console.error('Ошибка удаления запросов:', error)
        res.status(500).render('error', { message: 'Ошибка сервера' })
    }
}

exports.approveCourse = async (req, res)=> {
    try {
        const courseId = req.params.id
        const course = await Course.findByIdAndUpdate(courseId, { status: 'Одобрен' })
        if (!course) {
            return res.status(404).render('error', { message: 'Запрос не найден' })
        }
        res.redirect('/admin/courses')
    } catch (error) {
        console.error('Ошибка подтверждения запроса:', error)
        res.status(500).render('error', { message: 'Ошибка сервера' })
    }
}

exports.rejectCourse=async (req, res)=> {
    try {
        const courseId = req.params.id
        const course = await Course.findByIdAndDelete(courseId)
        if (!course) {
            return res.status(404).render('error', { message: 'Запрос не найден' })
        }
        res.redirect('/admin/courses')
    } catch (error) {
        console.error('Ошибка отклонения запроса:', error)
        res.status(500).render('error', { message: 'Ошибка сервера' })
    }
}

exports.getHelps = async (req,res,next)=>{
    try{
        const helps = await Help.find()
        if (req.cookies.auth === 'true') {
        res.render('user/adminHelp', {helps, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser})
        } else {
            res.redirect('/login')
        }
    }catch (err){
        next(err)
    }
}

exports.deleteHelps = async (req,res)=>{
    try {
        const helpId = req.params.id
        const help = await Help.findByIdAndDelete(helpId)
        if (!help) {
            return res.status(404).render('error', { message: 'Запрос не найден' })
        }
        res.redirect('/admin/helps')
    } catch (error) {
        console.error('Ошибка удаления запросов:', error)
        res.status(500).render('error', { message: 'Ошибка сервера' })
    }
}