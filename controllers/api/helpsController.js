const Help = require('../../models/helpModel')
const User = require("../../models/userModel");

exports.getHelp = async (req,res) =>{
    try{
        const helps = await Help.find({},{ __v:0})
        const user=await User.find()
        res.json(helps)
    } catch(err){
        res.status(500).json({ error: 'Failed to fetch helps' })
    }
}

exports.getHelpById = async (req, res) => {
    const { id } = req.params
    try {
        const help = await Help.findById(id, { __v: 0})
        if (help) {
            res.json(help)
        } else {
            res.status(404).json({ error: 'Help not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch help' })
    }
}

exports.createHelp = async (req,res)=>{
    const {titleH, descriptionH, phoneH, emailH} = req.body
    try{
        const newHelp = await Help.create({
            titleH,
            descriptionH,
            phoneH,
            emailH
        })
        res.status(201).json(newHelp)
    } catch (err){
        res.status(500).json({ error: 'Failed to fetch helps' })
    }
}

exports.deleteHelpById = async (req, res) => {
    const { id } = req.params
    try {
        const deletedHelp = await Help.findByIdAndDelete(id)
        if (deletedHelp) {
            res.json({ message: 'Help deleted successfully' })
        } else {
            res.status(404).json({ error: 'Help not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete help' })
    }
}