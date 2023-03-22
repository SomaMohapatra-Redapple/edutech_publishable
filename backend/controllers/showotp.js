const otp = require('../models/otp')

const showotp = async (req, res) => {
    var db;
    
    try{

    const result =  await otp.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = showotp;