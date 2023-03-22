const express = require('express');
const showcoursecontent = require('../controllers/showcoursecontent')
const router = express.Router();

router.route('/showcoursecontent').get(showcoursecontent);

module.exports = showcoursecontent;