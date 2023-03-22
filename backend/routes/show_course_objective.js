const express = require('express');
const show_course_prerequisite = require('../controllers/show_course_prerequisite')
const router = express.Router();

router.route('/show_course_prerequisite').get(show_course_prerequisite);

module.exports = show_course_prerequisite;
