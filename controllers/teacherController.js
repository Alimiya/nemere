const UserModel = require("../models/userModel")

// Получение данных учителей
exports.getTeacher=async (req,res)=>{
    try{
        const teacher=await UserModel.find()
        res.render("layout/teacher",{teacher:teacher, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser})
    }
    catch (err){
        console.log(err)
    }
}