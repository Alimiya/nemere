const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    fio: {type:String},
    title:{type: String, required: true},
    description:{type: String, required: true},
    pdf:{type: String},
    user_id:{type:String, required: true},
    price: { type: Number, required: true },
    direction: { type: String, enum: ['Работа с родителями', 'Работа с детьми', 'Личный опыт'], required: true },
    createdAt: { type: Date, default: Date.now },
    status: {type: String, enum: ['отклонен', 'одобрен', 'в обработке'], default:'в обработке'}
})

const CourseModel = mongoose.model('CourseModel', courseSchema)

module.exports = CourseModel