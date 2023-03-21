const express = require('express');
const router = express.Router();
const showtestimonials = require('../controllers/showtestimonials')

router.route('/showtestimonials').get(showtestimonials);
module.exports = showtestimonials;