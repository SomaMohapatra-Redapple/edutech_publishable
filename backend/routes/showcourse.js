const express = require('express');
const router = express.Router();
const showcourse = require('../controllers/showcourse')

router.route('/showcourse').get(showcourse);
module.exports = showcourse;