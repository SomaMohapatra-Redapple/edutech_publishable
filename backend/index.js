require('dotenv').config()
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
const show_subcategories =  require('./routes/show_subcategories')
const get_subcategories_by_id =  require('./routes/get_subcategories_by_id')




const app = express();
connectDB();

var cors = require("cors");
app.use(cors());
let port ;
if (process.env.STATUS==='production')
{port=process.env.PROD_PORT}
else if(process.env.STATUS==='development')
{port=process.env.DEV_PORT}
else if(process.env.STATUS==='testing')
{port=process.env.TEST_PORT}

const options = {
    definition : {
        openapi : '3.0.0',
        info :{
            title : 'admin data project ',
            version : '1.0.0'
        },
        servers:[
            
            {
                url : `http://192.168.1.57:${port}`
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

/**
 * @swagger
 * /showcourse:
 *  get:
 *      summary: this api is used to get all courses
 *      description: this api is used to show all courses
 *      responses:
 *                200 : 
 *                      description : To test get method
 *      
 */


/**
 * @swagger
 * /show_course_objective:
 *  get:
 *      summary: this api is used to get courses with course objective
 *      description: this api is used to show all courses
 *      responses:
 *                200 : 
 *                      description : To test get method
 *      
 */
/**
 * @swagger
 * /show_course_prerequisite:
 *  get:
 *      summary: this api is used to get course prerequisite
 *      description: this api is used to show course prerequisite
 *      responses:
 *                200 : 
 *                      description : To test get method
 *      
 */

/**
 * @swagger
 * /show_course_requirement:
 *  get:
 *      summary: this api is used to get course requirement
 *      description: this api is used to show course requirement
 *      responses:
 *                200 : 
 *                      description : To test get method
 *      
 */
/**
 * @swagger
 * /show_course_target_audiences:
 *  get:
 *      summary: this api is used to get course target audiences
 *      description: this api is used to show course target audiences
 *      responses:
 *                200 : 
 *                      description : To test get method
 *      
 */

/**
 * @swagger
 * /showotp:
 *  get:
 *      summary: this api is used to get otp
 *      description: this api is used to show otp
 *      responses:
 *                200 : 
 *                      description : To test get method
 *      
 */

/**
 * @swagger
 * /showuser:
 *  get:
 *      summary: this api is used to get user
 *      description: this api is used to show user
 *      responses:
 *                200 : 
 *                      description : To test get method
 *      
 */

/**
 * @swagger
 * /showaccountdetail:
 *  get:
 *      summary: this api is used to get accountdetail
 *      description: this api is used to show accountdetail
 *      responses:
 *                200 : 
 *                      description : To test get method
 *      
 */

/**
 * @swagger
 * /usertype:
 *  get:
 *      summary: this api is used to get usertype
 *      description: this api is used to show usertype
 *      responses:
 *                200 : 
 *                      description : To test get method
 *      
 */

/**
 * @swagger
 * /showlanguage:
 *  get:
 *      summary: this api is used to get showlanguage
 *      description: this api is used to show showlanguage
 *      responses:
 *                200 : 
 *                      description : To test get method
 *      
 */

/**
 * @swagger
 * /get_subcategories_by_id/64193f10b8cd525a9dc59b8b:
 *  get:
 *      summary: this api is used to get subcategories by parent id
 *      description: this api is used to get subcategories according to parent
 *      responses:
 *                200 : 
 *                      description : To test get method
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
app.use('/show_subcategories',show_subcategories );
app.use('/get_subcategories_by_id/:id',get_subcategories_by_id );




app.listen(port,"0.0.0.0", () => { logger.info("server is running on "+process.env.STATUS + " mode and listening on " + port) });