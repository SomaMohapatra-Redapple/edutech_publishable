const express = require('express');
const router = express.Router();
const showcourses = require('../controllers/showcourses')

router.route('/showcourses').get(showcourses);
module.exports = showcourses;