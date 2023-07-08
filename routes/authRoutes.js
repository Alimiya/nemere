const express = require('express')
const authController = require('../controllers/userController')

const router = express.Router()

// Получение данных входа
router.get('/login',authController.getLogin)
// Вход пользователя
router.post('/login', authController.postLogin)
// Выход пользователя
router.get('/logout', authController.logout)

router
    .route("/register")
    .get(authController.getRegister)
    .post(authController.postRegister)

module.exports = router