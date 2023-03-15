const Stud_detail = require('../models/student_detail');


const createstudentdata =  (req,res)=>{

   
    
        const stud_detail = new Stud_detail ({


            
                // name: " Vanita",
                // pri_phno: 8755076952,
                // alt_phno: 8855076952,
                // gender: "Female"
            
            name: req.body.name,
            pri_phno: req.body.pri_phno,
            alt_phno: req.body.alt_phno,
            gender: req.body.gender
        });
        stud_detail.save().then((result) => {
            res.send(result);
        }).catch((err)=>console.log(err));
    
}

module.exports = createstudentdata ;