const express = require('express');
const showusertypes = require('../controllers/showusertype')
const router = express.Router();

router.route('/showusertypes').get(showusertypes);

module.exports = showusertypes;