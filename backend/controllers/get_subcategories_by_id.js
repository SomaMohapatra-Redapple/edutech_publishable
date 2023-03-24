const subcategories = require('../models/subcategories')

const get_subcategories_by_id = async (req, res,next) => {

        let para = req.params.id;
    
    
        try{

                const result =  await subcategories.find({ parent_id: para  });
                console.log(result);
                res.send(result); 
                }
            
                catch(error)
                {
                    console.log(error.message);
                }
                
    
        console.log(req.params.id);
        //next();
    
}

module.exports = get_subcategories_by_id;
