const express = require('express');
const showaccountdetail = require('../controllers/showaccountdetail')
const router = express.Router();

router.route('/showaccountdetail').get(showaccountdetail);

module.exports = showaccountdetail;