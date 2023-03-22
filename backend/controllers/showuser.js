const log = require('../logger');
const user = require('../models/user')

const users = async (req, res) => {
    var db;
    
    try{

    const result =  await user.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = users;