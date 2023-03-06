const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const router = express.Router();
const admindata = require('../controllers/admindata')

const { version } = require('mongoose');
const app = express();




router.route('/admindata').post(admindata);

module.exports = admindata;