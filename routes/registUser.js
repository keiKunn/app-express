const express = require('express')
const router = express.Router()
const registUserController = require('../controllers/RegistUserController')

/* GET registuser. */
router.get('/registUser', registUserController.doGetRegistUser)

module.exports = router
