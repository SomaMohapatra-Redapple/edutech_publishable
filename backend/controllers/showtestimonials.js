const log = require('../logger');
const testimonials = require('../models/testimonials');

const showtestimonials = async (req, res) => {
    var db;
    
    try{

    const result =  await testimonials.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = showtestimonials;