const express = require('express')
const adminController = require('../controllers/adminController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

// Users
router.get('/admin/users', adminController.getUsers)
router.post('/admin/users/create', adminController.createUser)
router.post('/admin/users/delete/:id', adminController.deleteUser)
router.post('/admin/users/update/:id', adminController.updateUser)

// Courses
router.get('/admin/courses', adminController.getCourses)
router.post('/admin/courses/delete/:id/course', adminController.deleteCourse)
router.post('/admin/courses/approve/:id/course', adminController.approveCourse)
router.post('/admin/courses/reject/:id/course', adminController.rejectCourse)

// Helps
router.get('/admin/helps', adminController.getHelps)
router.post('/admin/helps/delete/:id', adminController.deleteHelps)

module.exports = router
