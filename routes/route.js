const express = require("express")
const userController = require("../controllers/userController")
const profileController = require("../controllers/profileController")
const auth = require("../middleware/auth")
const router = express.Router()

router.get('/',userController.main, userController.logout)
router.get("/gallery", (req, res) => {
  res.render("gallery/gallery")
})
router.get("/about", (req, res) => {
  res.render("layout/about")
})


module.exports = router
