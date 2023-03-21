const express = require('express');
const showlevels = require('../controllers/showlevels')
const router = express.Router();

router.route('/showlevels').get(showlevels);

module.exports = showlevels;