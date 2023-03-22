const log = require('../logger');
const language = require('../models/language')

const showlanguage = async (req, res) => {
    var db;
    
    try{

    const result =  await language.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = showlanguage;