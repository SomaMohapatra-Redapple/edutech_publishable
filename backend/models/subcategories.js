const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subcategorie = new Schema(
    {
        
    name : {
    type : String,
    required : true
    },
    parent_id: {
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
        
    }},{ timestamps : true }
);

const subcategories = mongoose.model('subcategorie', subcategorie);
module.exports = subcategories;
