const CourseModel = require("../models/courseModel")
const UserModel = require("../models/courseModel")
const Comment = require("../models/CommentModel")
const Course = require("../models/courseModel");

// Получение данных курсов
exports.getCourse = async (req, res) => {
    try {
        const { sort, directionFilter, minPrice, maxPrice, searchQuery, searchQueryFio } = req.query

        const courses = await CourseModel.find()
        const users = await UserModel.find()
        res.render("layout/course", { courses: courses, searchQuery, searchQueryFio, directionFilter, minPrice, maxPrice, sort, users:users, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser })
    } catch (err) {
        console.log(err)
    }
}

exports.Search = async (req, res) => {
    const { sort, directionFilter, minPrice, maxPrice, searchQuery, searchQueryFio } = req.query

    let query = {}

// Фильтрация по направлению
    if (directionFilter && directionFilter.length > 0) {
        query.direction = { $in: directionFilter }
    }

// Фильтрация по ценовому диапазону
    if (minPrice && maxPrice) {
        query.price = { $gte: Number(minPrice), $lte: Number(maxPrice) }
    }

// Поиск по названию курса
    if (searchQuery) {
        query.title = { $regex: `.*${searchQuery}.*`, $options: 'i' }
    }

    let courses = []

// Поиск по фио
    if (searchQueryFio) {
        query.fio = { $regex: `.*${searchQueryFio}.*`, $options: 'i' }
    }

    let fio = []


// Выполнение запроса с учетом сортировки
    let sortOption = {}

    switch (sort) {
        case 'az':
            sortOption.title = 1
            break
        case 'za':
            sortOption.title = -1
            break
        case 'newest':
            sortOption.createdAt = 1
            break
        case 'oldest':
            sortOption.createdAt = -1
            break
        default:
            break
    }

    try {
        courses = await CourseModel.find(query).sort(sortOption)
    } catch (err) {
        console.log(err)
    }

    res.render('layout/course', { courses, searchQuery,searchQueryFio, directionFilter, minPrice, maxPrice, sort, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser })
}

// Получение данных курсов
exports.Course = async (req, res) => {
        const courses = await CourseModel.find({},{_id:0, __v:0})
        res.render('layout/course',{courses:courses, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser})
}

exports.getRead = async (req,res)=>{
    try{
        const id = req.params.id
        const courses = await CourseModel.find({_id:id})
        const course_comments = await Comment.find({course_id:id})
        res.render('layout/ReadMore', {courses:courses, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser, comments:course_comments })
    }
    catch (err){
        console.log(err)
    }
}

exports.createComment = async (req, res) => {
    const { nick, comment, rating } = req.body
    const course_id = req.params.id
    try {
        const newComment = await Comment.create({
            nick,
            comment,
            rating,
            course_id
        })
        await newComment.save()
        res.redirect(`/course/read/${course_id}`)
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, error: 'Something went wrong' })
    }
}

exports.deleteComment = async (req, res)=> {
    try {
        const commentId = req.params.id
        const comment = await Comment.findById({_id:commentId})
        await Comment.findByIdAndDelete(commentId)
        res.redirect(`/course/read/${comment.course_id}`)
    } catch (error) {
        console.error('Ошибка удаления запросов:', error)
    }
}
