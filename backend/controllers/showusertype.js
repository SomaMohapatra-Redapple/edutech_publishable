const usertype = require('../models/usertype')

const usertypes = async (req, res) => {
    var db;
    
    try{

    const result =  await usertype.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = usertypes;