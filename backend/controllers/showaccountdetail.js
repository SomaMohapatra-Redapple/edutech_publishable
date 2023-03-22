const log = require('../logger');
const accountdetail = require('../models/accountdetail')

const accountdetails = async (req, res) => {
    var db;
    
    try{

    const result =  await accountdetail.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = accountdetails;