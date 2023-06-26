// Проверка аутентификации пользователя
exports.requireAuth = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/auth/login')
    }
    next()
}