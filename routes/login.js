const express = require('express')
const router = express.Router()
const loginController = require('../controllers/LoginController')

/* GET login */
router.get('/', loginController.doGetLogin)

module.exports = router
