const log = require('../logger');
const showcourse = require('../models/courses')

const showcourses = async (req, res) => {
    var db;
    
    try{

    const result =  await showcourse.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = showcourses;