const express = require("express")
const teacherController = require("../controllers/teacherController")
const router = express.Router()

router.get("/teacher", teacherController.getTeacher)

module.exports = router