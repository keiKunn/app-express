const express = require('express')
const router = express.Router()
const loginController = require('../controllers/LoginController')

/* GET login */
router.get('/login', loginController.doGetLogin)

module.exports = router
