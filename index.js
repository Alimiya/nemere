const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
require("dotenv").config({ path: "./config/.env" })

const userRoute = require("./routes/route")
const profileRoute = require("./routes/profile")
const authRoute = require("./routes/authRoutes")
const teacherRoute = require("./routes/teacher")
const adminRoute = require('./routes/adminRoutes')
const courseRoute = require('./routes/course')
const usersRoute = require('./routes/api/userRoutes')
const coursesRoute = require('./routes/api/courseRoutes')
const helpRoute = require('./routes/api/helpRoutes')

const app = express()
const PORT = 3000

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

app.use(express.static(__dirname + "/public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.use(cookieParser())

app.use(userRoute)
app.use(profileRoute)
app.use(authRoute)
app.use(teacherRoute)
app.use(adminRoute)
app.use(courseRoute)
app.use('/api', usersRoute)
app.use('/api', coursesRoute)
app.use('/api', helpRoute)

const start = async () => {
    try {
        await mongoose
            .connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log("Database is connected")
            })
            .catch((error) => console.log(error.message))
        app.listen(PORT, () => {
            console.log(`Server is running on PORT = ${PORT}`)
        })
        process.on("beforeExit", () => {
            server.close(() => {
                console.log("Server is shutting down")
                res.clearCookie("auth")
                res.clearCookie("authuser")
            })
        })
    } catch (error) {
        console.log(error)
    }
}

start()
