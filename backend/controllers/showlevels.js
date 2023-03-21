const log = require('../logger');
const levels = require('../models/level');

const showlevels = async (req, res) => {
    var db;
    
    try{

    const result =  await levels.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = showlevels;