const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const multer=require('multer')
const session = require("express-session")
const MongoDBStore = require('connect-mongodb-session')(session)
require("dotenv").config({ path: "./config/.env" })

const userRoute = require("./routes/route")
const profileRoute = require("./routes/profile")
const authRoute = require("./routes/authRoutes")
const teacherRoute = require("./routes/teacher")
const adminRoute = require('./routes/adminRoutes')
const courseRoute = require('./routes/course')

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
app.use(cors())

app.use(userRoute)
app.use(profileRoute)
app.use(authRoute)
app.use(teacherRoute)
app.use(adminRoute)
app.use(courseRoute)

const store = new MongoDBStore({
    uri:process.env.MongoDB_URI,
    collection: 'sessions'
})

app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
    store:store
}))
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
    } catch (error) {
        console.log(error)
    }
}

start()
