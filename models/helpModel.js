const mongoose = require('mongoose')

const helpSchema = new mongoose.Schema({
    titleH:{type:String},
    descriptionH:{type:String},
    phoneH:{type:String},
    emailH:{type:String}
})

const HelpModel = mongoose.model('HelpModel', helpSchema)

module.exports = HelpModel