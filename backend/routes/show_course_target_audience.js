const express = require('express');
const show_course_target_audiences = require('../controllers/show_course_target_audience')
const router = express.Router();

router.route('/show_course_target_audiences').get(show_course_target_audiences);

module.exports = show_course_target_audiences;