const log = require('../logger');
const showcategory = require('../models/categories')

const showcategories = async (req, res) => {
    var db;
    
    try{

    const result =  await showcategory.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = showcategories;