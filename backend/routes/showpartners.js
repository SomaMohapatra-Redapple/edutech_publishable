const express = require('express');
const showpartners = require('../controllers/showpartners')
const router = express.Router();

router.route('/showpartners').get(showpartners);

module.exports = showpartners;