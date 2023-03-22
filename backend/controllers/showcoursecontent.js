const log = require('../logger');
const coursecontent = require('../models/coursecontent')

const coursecontents = async (req, res) => {
    var db;
    
    try{

    const result =  await coursecontent.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = coursecontents;