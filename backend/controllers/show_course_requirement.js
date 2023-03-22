const course_requirement = require('../models/course_requirement')

const show_course_requirements = async (req, res) => {
    var db;
    
    try{

    const result =  await course_requirement.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = show_course_requirements;