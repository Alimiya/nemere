const express = require("express")
const profileController = require("../controllers/profileController")
const upload = require("../middleware/imageUpload")
const uploads = require("../middleware/pdfUpload")
const router = express.Router()

router.get("/profile/:id", profileController.getProfile)

router.post("/profile/:id/update", profileController.updateProfile)

router.post('/profile/:id/upload',upload.single('image'),profileController.uploadProfile)

router.post('/profile/:id/courses',uploads.single('pdf'),profileController.getCourse)

router.post('/profile/:id/courses/delete', profileController.deleteCourse)

router.post('/profile/:id/courses/update', profileController.updateCourse)

router.post("/logout", profileController.logout)

module.exports = router
   