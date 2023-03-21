const log = require('../logger');
const course = require('../models/courses')

const courses = async (req, res) => {
    var db;
    
    try{

    const result =  await course.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = courses;