const express = require('express');
const show_subcategories = require('../controllers/show_subcategories');

const router = express.Router();

router.route('/show_subcategories').get(show_subcategories);

module.exports = show_subcategories;