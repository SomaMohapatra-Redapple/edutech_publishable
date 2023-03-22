const log = require('../logger');
const course = require('../models/course')

const showcourse = async (req, res) => {
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

module.exports = showcourse;