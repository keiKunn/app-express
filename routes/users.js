const express = require('express')
const router = express.Router()
const usersController = require('../controllers/UsersController')

/* GET users listing. */
router.get('/', usersController.doGetUser)

module.exports = router
