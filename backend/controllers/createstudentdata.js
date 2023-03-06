const Stud_detail = require('../models/student_detail');

const createstudentdata =  (req,res)=>{
    
        const stud_detail = new Stud_detail ({
            name: " Anya",
            image: "",
            pri_phno: "8755076655",
            alt_phno: "8855076655",
            gender: "Male",
            dob: "10.09.2019",
        });
        stud_detail.save().then((result) => {
            res.send(result);
        }).catch((err)=>console.log(err));
    
}

module.exports = createstudentdata ;