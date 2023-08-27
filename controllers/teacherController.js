const UserModel = require("../models/userModel")

// Получение данных учителей
exports.getTeacher=async (req,res)=>{
    try{
        const users=await UserModel.find()
        res.render("layout/teachers",{users:users, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser})
    }
    catch (err){
        console.log(err)
    }
}