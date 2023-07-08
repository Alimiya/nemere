const express = require("express")
const courseController = require("../controllers/courseController")
const router = express.Router()

router.get('/course',courseController.getCourse)
router.get('/course/search',courseController.Search)
router.get('/course/get',courseController.Course)
router.get('/course/read/:id',courseController.getRead)
router.post('/course/comment/:id',courseController.createComment)
router.post('/course/comment/:id/delete',courseController.deleteComment)

module.exports = router
