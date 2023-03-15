
const { Binary } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student_details = new Schema(
    {
        name : {
        type : String,
        required : true
    },
    image : {
        type : Buffer
    },
    pri_phno : {
        type : Number,
        required : true
    },
    alt_phno : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    dob : {
        type : Date
    },
    email : {
        type : String
    },
    guardian_name : {
        type : String
    },
    guardian_occupation : {
        type : String
    },
    address : {
        type : String
    },
    status : {
        type : String
    },
    created_by : {
        type : String
    },
    created_at : {
        type : String
    },
    updated_by : {
        type : String
        
    },
    updated_at : {
        type : String
        
    },
    status : {
        type : String
        
    }

},{ timestamps : true }
);

const Stud_detail = mongoose.model('stud_detail', student_details);

module.exports = Stud_detail;