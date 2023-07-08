const express = require('express')
const router = express.Router()
const courseController = require('../../controllers/api/coursesController')

router.get('/courses', courseController.getAllCourses)
router.get('/courses/:id', courseController.getCourseById)
router.post('/courses', courseController.createCourse)
router.put('/courses/:id', courseController.updateCourseById)
router.delete('/courses/:id', courseController.deleteCourseById)

module.exports = router