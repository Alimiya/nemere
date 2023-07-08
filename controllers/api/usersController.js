const User = require('../../models/userModel')

// GET /users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { __v: 0, _id: 0 })
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' })
    }
}

// GET /users/{id}
exports.getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id, { __v: 0, _id: 0 })
        if (user) {
            res.json(user)
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' })
    }
}

// POST /users
exports.createUser = async (req, res) => {
    const { name, surname, lastname, email, password, role, imageName, image, experience } = req.body
    try {
        const newUser = await User.create({
            name,
            surname,
            lastname,
            email,
            password,
            role,
            imageName,
            image,
            experience
        })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' })
    }
}

// PUT /users/{id}
exports.updateUserById = async (req, res) => {
    const { id } = req.params
    const { name, surname, lastname, email, password, role, imageName, image, experience } = req.body
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                name,
                surname,
                lastname,
                email,
                password,
                role,
                imageName,
                image,
                experience
            },
            { new: true, projection: { __v: 0, _id: 0 } }
        )
        if (updatedUser) {
            res.json(updatedUser)
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' })
    }
}

// DELETE /users/{id}
exports.deleteUserById = async (req, res) => {
    const { id } = req.params
    try {
        const deletedUser = await User.findByIdAndDelete(id)
        if (deletedUser) {
            res.json({ message: 'User deleted successfully' })
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' })
    }
}