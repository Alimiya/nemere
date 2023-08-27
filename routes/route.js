const express = require("express")
const userController = require("../controllers/userController")
const helpsController = require('../controllers/api/helpsController')
const helpController = require('../controllers/helpController')
const router = express.Router()

router.get('/',userController.main, userController.logout, helpsController.getHelp)
router.get("/gallery",userController.gallery, (req, res) => {res.render("gallery/gallery", {adminlogin:req.cookies.auth, userlogin:req.cookies.authuser})})
router.get("/about", userController.about,(req, res) => {res.render("layout/connections",{adminlogin:req.cookies.auth, userlogin:req.cookies.authuser})})

router.get('/helps', helpController.getHelps, helpsController.createHelp)
router.post('/helps', helpController.createHelps)

//components
router.get('/components/navbar',userController.navbar)
router.get('/components/balabaqsha',(req,res)=>{res.render("components/balabaqsha"),{adminlogin:req.cookies.auth, userlogin:req.cookies.authuser}})
router.get('/components/footer',(req,res)=>{res.render("components/footer"),{adminlogin:req.cookies.auth, userlogin:req.cookies.authuser}})
router.get('/components/quickConnection',(req,res)=>{res.render("components/quickConnection"),{adminlogin:req.cookies.auth, userlogin:req.cookies.authuser}})
router.get('/components/gallery',(req,res)=>{res.render("components/gallery"),{adminlogin:req.cookies.auth, userlogin:req.cookies.authuser}})

module.exports = router
