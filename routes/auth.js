const express = require("express")
const userController = require("../controllers/userController")
const router = express.Router()

router
  .route("/login")
  .get(userController.getLogin)
  .post(userController.postLogin)

router
  .route("/register")
  .get(userController.getRegister)
  .post(userController.postRegister)

router.post("/logout", userController.logout)

module.exports = router
