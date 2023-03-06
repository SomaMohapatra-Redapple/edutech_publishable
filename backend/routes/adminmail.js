const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const router = express.Router();
const adminmail = require('../controllers/adminmail')

const { version } = require('mongoose');
const app = express();




router.route('/adminmail').get(adminmail);

module.exports = adminmail;