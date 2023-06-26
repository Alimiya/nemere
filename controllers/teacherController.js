const UserModel = require("../models/userModel")

// Получение данных учителей
exports.getTeacher=async (req,res)=>{
    try{
        const teacher=await UserModel.find()
        res.render("layout/teacher",{teacher:teacher})
    }
    catch (err){
        console.log(err)
    }
}