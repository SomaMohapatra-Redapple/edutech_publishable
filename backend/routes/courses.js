const express = require('express');
const courses = require('../controllers/courses');

const router = express.Router();

router.route('/courses').post(courses);

module.exports = courses;