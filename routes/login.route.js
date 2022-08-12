const express = require('express')
const router = express.Router()

const loginController = require('../controllers/login.controller')

router.get("/", loginController.loginControllerGET)
router.post("/", loginController.loginControllerPOST)

module.exports = router