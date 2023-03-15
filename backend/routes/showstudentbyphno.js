const express = require('express');
const router = express.Router();
const showstudentbyphno = require('../controllers/showstudentbyphno');

const { version } = require('mongoose');
const app = express();




router.route('/showstudentbyphno').get(showstudentbyphno);

module.exports = showstudentbyphno;