const express = require("express")
const userController = require("../controllers/userController")
const helpsController = require('../controllers/api/helpsController')
const helpController = require('../controllers/helpController')
const router = express.Router()

router.get('/',userController.main, userController.logout, helpsController.getHelp)
router.get("/gallery", (req, res) => {res.render("gallery/gallery", {adminlogin:req.cookies.auth, userlogin:req.cookies.authuser})})
router.get("/about", (req, res) => {res.render("layout/about",{adminlogin:req.cookies.auth, userlogin:req.cookies.authuser})})

router.get('/helps', helpController.getHelps, helpsController.createHelp)
router.post('/helps', helpController.createHelps)

module.exports = router
