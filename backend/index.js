const express = require("express");
const connectDB = require("./db_con/connection");
const createstudentdata = require("./routes/createstudentdata");
const login = require("./routes/login");
const admindata = require("./routes/admindata");
const sendmail = require('./controllers/adminmail')
const profile = require("./routes/profile");
const swagger = require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');

const app = express();
connectDB();


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
    apis : ['./index.js']
}

const swaggerspec = swagger(options);
app.use('/api-docs',swaggerui.serve,swaggerui.setup(swaggerspec))

/**
 * @swagger
 * /login:
 *  get:
 *      summary: this api is used to login
 *      description: this api is used to login of admin
 *      responses:
 *                200 : 
 *                      description : To test get method
 *      
 */

/**
 * @swagger
 * /admindata:
 *  post:
 *      summary: this api is used to admindata
 *      description: this api is used to admindata
 *      responses:
 *                200 : 
 *                      description : To test admindata posting
 *      
 */

/**
 * @swagger
 * /createstudentdata:
 *  post:
 *      summary: this api is used to createstudentdata
 *      description: this api is used to createstudentdata
 *      responses:
 *                200 : 
 *                      description : To test post method
 *      
 */

app.use('/login', login)

app.use('/createstudentdata', createstudentdata);
app.use('/admindata', admindata);
app.use('/profile', profile);
app.use('/adminmail', sendmail);

app.listen(3000, () => { console.log("on port 3000") });