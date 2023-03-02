const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const router = express.Router();
const admindata = require('../controllers/admindata')
const swagger = require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');
const { version } = require('mongoose');
const app = express();

const options = {
    definition : {
        openapi : '3.0.0',
        info :{
            title : 'admin data project ',
            version : '1.0.0'
        },
        servers:[
            {
                url : 'http://localhost:3000/'
            }
        ]

    },
    apis : ['./admindata.js']
}

const swaggerspec = swagger(options);
app.use('/api-docs',swaggerui.serve,swaggerui.setup(swaggerspec))


router.route('/admindata').post(admindata);

module.exports = admindata;