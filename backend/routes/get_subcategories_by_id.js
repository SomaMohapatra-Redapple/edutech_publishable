const express = require('express');
const router = express.Router();
const get_subcategories_by_id = require('../controllers/get_subcategories_by_id')

router.route('/:id').get(get_subcategories_by_id);
module.exports = get_subcategories_by_id;