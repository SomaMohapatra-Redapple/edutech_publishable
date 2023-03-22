const show_course_objective = require('../models/course_objective')

const show_course_objectives = async (req, res) => {
    var db;
    
    try{

    const result =  await show_course_objective.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = show_course_objectives;
