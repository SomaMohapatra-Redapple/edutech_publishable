const show_course_prerequisite = require('../models/course_prerequisite')

const show_course_prerequisites = async (req, res) => {
    var db;
    
    try{

    const result =  await show_course_prerequisite.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = show_course_prerequisites;
