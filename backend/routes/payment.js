const express = require('express');

const router = express.Router();
const payment = require('../controllers/payment')

router.route('/payment').get(payment);

module.exports = payment;