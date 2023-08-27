const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const UserModel = require("../models/userModel")

// GET register
exports.getRegister = (req, res) => {
    try {
        res.render("auth/register")
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
        console.log(error)
    }
}
// POST register
exports.postRegister = async (req, res) => {
    try {
        const { name, surname, lastname, experience, email, password } = req.body

        // Check if email and password are provided
        if (!email || !password || !name || !surname || !lastname || !experience) {
            res
                .status(400)
                .json({ success: false, message: "Please fill all required fields" })
            console.log("no data")
            return
        }

        // Check if user with the email already exists
        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
            return res
                .status(409)
                .json({ message: "User with this email already exists" })
        }

        // Hash the password
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create the user
        const newUser = new UserModel({
            name,
            surname,
            lastname,
            experience,
            email,
            password: hashedPassword,
        })
        await newUser.save()

        // Create a JWT token
        const token = jwt.sign(
            { email: newUser.email, id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        res.redirect(`/profile/${newUser._id}`)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
        console.log(error)
    }
}

// GET Login
exports.getLogin = (req, res) => {
    try {
        res.render("auth/login")
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
        console.log(error)
    }
}

// POST Login
exports.postLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        // Check if email and password are provided
        if (!email || !password) {
            res
                .status(400)
                .json({ success: false, message: "Please provide email and password" })
            console.log("no data")
            return
        }

        // Check if user with email exists
        const user = await UserModel.findOne({ email })
        if (!user) {
            res.status(400).json({
                success: false,
                message: "User with this email does not exist",
            })
            console.log("exist")
            return
        }

        // Check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            res.status(400).json({ success: false, message: "Incorrect password" })
            console.log("pass")
            return
        }

        // Create a JWT token
        const token = jwt.sign(
            { email: user.email, id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        if (user.role === "Admin") {
            res.cookie("auth", 'true', { maxAge:900000 })
            return res.redirect("/admin/users")
        } else {
            console.log(user._id)
            res.cookie("authuser", "user", { maxAge:900000 })
            return res.redirect(`/profile/${user._id}`)
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
        console.log(error)
    }
}

// POST Logout
exports.logout = (req, res) => {
    try {
        if(req.cookies.auth){
            res.clearCookie('auth')
        }else if (req.cookies.authuser){
            res.clearCookie('authuser')
        }
            res.redirect('/')
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
        console.log(error)
    }
}

exports.main=async(req,res)=>{
    const users=await UserModel.findById(req.params.id)
    res.render('layout/index',{users:users, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser, id:req.params.id})
}
exports.about=async(req,res)=>{
    const users=await UserModel.findById(req.params.id)
    res.render('layout/connections',{users:users, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser, id:req.params.id})
}
exports.gallery=async(req,res)=>{
    const users=await UserModel.findById(req.params.id)
    res.render('layout/grid-gallery',{users:users, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser, id:req.params.id})
}

exports.navbar=async(req,res)=>{
    console.log(req.body)
    console.log(req.params.id)
    const users=await UserModel.findById(req.params.id)
    res.render('components/navbar',{users:users, adminlogin:req.cookies.auth, userlogin:req.cookies.authuser, _id:req.params.id})
}