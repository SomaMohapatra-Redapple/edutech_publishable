const express = require('express');
const show_course_requirements = require('../controllers/show_course_requirement')
const router = express.Router();

router.route('/show_course_requirements').get(show_course_requirements);

module.exports = show_course_requirements;