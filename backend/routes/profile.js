const express = require('express');
const profile = require('../controllers/profile');
const router = express.Router();
const authtoken = require('../auth/auth')

router.route('/profile').post(profile);

module.exports = router;