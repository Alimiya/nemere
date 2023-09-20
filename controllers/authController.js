const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const session = require("express-session")

// Получение данных входа
exports.getLogin = (req, res) => {
    try {
        res.render("auth/login")
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
        console.log(error)
    }
}
// Вход пользователя
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' })
        }
        req.session.user = {
            _id: user._id,
            email: user.email, // и другие данные, если нужно
        };
        console.log("req: "+req.session.user)
        console.log("user "+user._id)
        if (user.role === 'admin') {
            return res.redirect('/admin/users')
        } else {
            return res.redirect(`/profile/${user._id}`)
        }
    } catch (error) {
        next(error)
    }
}

// Выход пользователя
exports.logout = (req, res, next) => {
    req.session.user = null
    res.redirect('/login')
}