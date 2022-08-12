const express = require('express')
const router = express.Router()

const homeController = require('../controllers/home.controller')

router.get("/", homeController.homeControllerGET)
router.post("/", homeController.homeControllerPOST)

module.exports = router