const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        surname: { type: String, required: true },
        lastname: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, default: 'User'},
        image:{type:String},
        experience:{type:Number}
})

const UserModel = mongoose.model('UserModel', userSchema)

module.exports = UserModel