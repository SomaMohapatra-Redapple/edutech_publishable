const express = require('express');
const showuser = require('../controllers/showuser')
const router = express.Router();

router.route('/showuser').get(showuser);

module.exports = showuser;