const User = require('../models/userModel')

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
        res.render('user/admin', { users })
    } catch (error) {
        next(error)
    }
}

// Добавление пользователя
exports.createUser = async (req, res, next) => {
    try {
        const { name, surname, email, password, experience } = req.body
        const users = new User({ name, surname, email, password, experience })
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
        const {name, surname, email, password, experience} =req.body
        const users=await User.findOne(userId,{name,surname,email,password, experience})
        res.render('components/editForm',{users})
    } catch(err){
        console.log(err)
    }
}

// Обновление пользователя
exports.updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id

        const { name, surname, email, password, experience } = req.body

        // Проверка на уникальность email
        const existingUser = await User.findOne({ email })
        if (existingUser && existingUser._id.toString() !== userId) {
            return res.status(400).json({ error: 'Email already exists' })
        }

        const users = await User.findByIdAndUpdate(userId, { name, surname, email, password, experience },{ new: true })
        res.redirect('/admin/users')
        res.render('user/admin', { users })
    } catch (error) {
        next(error)
    }
}

