const express = require('express');
const showcategories = require('../controllers/showcategories');

const router = express.Router();

router.route('/showcategories').get(showcategories);

module.exports = showcategories;