const express = require("express");
const connectDB = require("./db_con/connection");
const createstudentdata = require("./routes/createstudentdata");
const login = require("./routes/login");
const admindata = require("./routes/admindata");
const sendmail = require('./controllers/adminmail')
const payment = require('./routes/payment');
const profile = require("./routes/profile");
const swagger = require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');
const logger = require('./logger');
const showcategories = require('./routes/showcategories')
const authtoken = require('./auth/auth');
const showstudentbyphno = require('./routes/showstudentbyphno');
const showcourse = require('./routes/showcourse');
const showpartners = require('./routes/showpartners')
const showtestimonials = require('./routes/showtestimonials');
const showlevels = require('./routes/showlevels');
const showlanguage = require('./routes/showlanguage');
const usertype = require('./routes/showusertype');
const show_course_requirement = require('./routes/show_course_requirement');
const showaccountdetail = require('./routes/showaccountdetail')
const showcoursecontent = require('./routes/showcoursecontent')
const showuser = require('./routes/showuser')
const showotp = require('./routes/showotp')
const show_course_target_audiences = require('./routes/show_course_target_audience')
const show_course_objective =  require('./routes/show_course_objective')
const show_course_prerequisite =  require('./routes/show_course_prerequisite')

const app = express();
connectDB();

var cors = require("cors");
app.use(cors());


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

app.use('/login', login);
app.use('/payment', payment);
app.use('/createstudentdata', createstudentdata);
app.use('/admindata', admindata);
app.use('/profile',authtoken, profile);
app.use('/adminmail', sendmail);
app.use('/showcategories', showcategories);
app.use('/showpartners', showpartners);
app.use('/showcourse',showcourse);
app.use('/showuser',showuser );
app.use('/showotp',showotp );
app.use('/showlevels',showlevels );
app.use('/showlanguage',showlanguage );
app.use('/usertype',usertype );
app.use('/show_course_requirement',show_course_requirement );
app.use('/showcoursecontent',showcoursecontent );
app.use('/showaccountdetail',showaccountdetail );
app.use('/showtestimonials',showtestimonials );
app.use('/show_course_target_audiences',show_course_target_audiences );
app.use('/showstudentbyphno/:id',showstudentbyphno);
app.use('/show_course_objective',show_course_objective );
app.use('/show_course_prerequisite',show_course_prerequisite );


app.listen(3000, () => { logger.info("on port 3000") });