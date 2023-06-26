const express = require("express")
const courseController = require("../controllers/courseController")
const router = express.Router()

router.get('/course',courseController.getCourse)
router.get('/course/search',courseController.Search)
router.get('/course/get',courseController.Course)

module.exports = router
