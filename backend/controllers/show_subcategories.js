const show_subcategorie = require('../models/subcategories')

const show_subcategories = async (req, res) => {
    var db;
    
    try{

    const result =  await show_subcategorie.find({},{__v:0});
    console.log(result);
    res.send(result); 
    log.info(result);
    }

    catch(error)
    {
        console.log(error.message);
    }
    
}

module.exports = show_subcategories;