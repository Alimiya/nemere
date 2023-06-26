const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            throw new Error('Authentication failed!')
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        const user = await UserModel.findById(decodedToken.id)

        if (!user) {
            throw new Error('Authentication failed!')
        }

        req.user = user
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: 'Authentication failed!' })
    }
}

module.exports = auth