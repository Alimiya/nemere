const express = require('express')
const adminController = require('../controllers/adminController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

// Получение всех пользователей
router.get('/admin/users', adminController.getUsers)

// Добавление пользователя
router.post('/admin/users/create', adminController.createUser)

// Удаление пользователя
router.post('/admin/users/delete/:id', adminController.deleteUser)

// Обновление пользователя
router.post('/admin/users/update/:id', adminController.updateUser)
// router.post('/admin/users/update/:id/ai', adminController.updateUserAi)

module.exports = router
