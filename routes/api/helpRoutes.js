const express = require('express')
const router = express.Router()
const helpController = require('../../controllers/api/helpsController')

router.get('/helps', helpController.getHelp)
router.get('/helps/:id', helpController.getHelpById)
router.post('/helps', helpController.createHelp)
router.delete('/helps/:id', helpController.deleteHelpById)

module.exports = router