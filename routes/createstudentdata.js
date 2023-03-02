const express = require('express');
const router = express.Router();
const createstudentdata = require('../controllers/createstudentdata')

router.route('/createstudentdata').post(createstudentdata);
module.exports = createstudentdata;