const log = require('../logger');
const showpartner = require('../models/partners');

const showpartners = async (req, res) => {
    var db;
    
    try{

    const result =  await showpartner.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = showpartners;