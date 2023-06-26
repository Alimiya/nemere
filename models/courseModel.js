const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    pdf:{type: String},
    user_id:{type:String, required: true},
    price: { type: Number, required: true },
    direction: { type: String, enum: ['Работа с родителями', 'Работа с детьми', 'Личный опыт'], required: true },
    createdAt: { type: Date, default: Date.now }
})

const CourseModel = mongoose.model('CourseModel', courseSchema)

module.exports = CourseModel