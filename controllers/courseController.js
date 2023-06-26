const CourseModel = require("../models/courseModel")
const UserModel = require("../models/courseModel")

// Получение данных курсов
exports.getCourse = async (req, res) => {
    try {
        const { sort, directionFilter, minPrice, maxPrice, searchQuery } = req.query

        const courses = await CourseModel.find()
        res.render("layout/course", { courses: courses, searchQuery, directionFilter, minPrice, maxPrice, sort })
    } catch (err) {
        console.log(err)
    }
}

exports.Search = async (req, res) => {
    const { sort, directionFilter, minPrice, maxPrice, searchQuery } = req.query

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
        query.title = { $regex: `^${searchQuery}`, $options: 'i' }
    }

    let courses = []

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

    res.render('layout/course', { courses, searchQuery, directionFilter, minPrice, maxPrice, sort })
}

// Получение данных курсов
exports.Course = async (req, res) => {
        const courses = await CourseModel.find({},{_id:0, __v:0})
        res.render('layout/course',{courses:courses})
}