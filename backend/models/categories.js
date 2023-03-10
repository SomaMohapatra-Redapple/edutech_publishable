
const { Binary } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categories = new Schema(
    {

        

        name : {
        type : String,
        required : true
    },
    children : {
        type : [String]
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

const Categories = mongoose.model('categorie', categories);

module.exports = Categories;