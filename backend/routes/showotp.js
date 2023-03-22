const express = require('express');
const showotp = require('../controllers/showotp')
const router = express.Router();

router.route('/showotp').get(showotp);

module.exports = showotp;