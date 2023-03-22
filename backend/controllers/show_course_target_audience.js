const log = require('../logger');
const show_course_target_audience = require('../models/course_target_audience')

const show_course_target_audiences = async (req, res) => {
    var db;
    
    try{

    const result =  await show_course_target_audience.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = show_course_target_audiences;