const Help = require('../models/helpModel')
const User = require("../models/userModel")

exports.getHelps = async (req,res) =>{
    try{
        const helps = await Help.find({},{_id:0, __v:0})
        const user=await User.find()
        res.render('layout/help', {helps, user, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser})
    } catch(err){
        res.status(500).json({ error: 'Failed to fetch helps' })
    }
}

exports.createHelps = async (req,res)=>{
    const {titleH, descriptionH, phoneH, emailH} = req.body
    try{
        const newHelp = await Help.create({
            titleH,
            descriptionH,
            phoneH,
            emailH
        })
        await newHelp.save()
        res.redirect('/')
    } catch (err){
        res.status(500).json({ error: 'Failed to fetch helps' })
    }
}