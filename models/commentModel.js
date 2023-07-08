const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    nick:{type:String},
    comment:{type:String},
    rating:{type:String},
    course_id:{type:String}
})

const CommentModel = mongoose.model('CommentModel', commentSchema)

module.exports = CommentModel