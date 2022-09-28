const express = require('express');

const indexController = require('../controllers/index');

const router = express.Router()

router.post('/', indexController.addPost)

module.exports = router