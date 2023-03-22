const express = require('express');
const showlanguage = require('../controllers/showlanguage')
const router = express.Router();

router.route('/showlanguage').get(showlanguage);

module.exports = showlanguage;