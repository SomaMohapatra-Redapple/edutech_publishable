
const { Binary } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category = new Schema(
    {
        name : {
        type : String,
        required : true
    },
    status : {
        type : String
        
    }

},{ timestamps : true }
);

const Category = mongoose.model('category', category);

module.exports = Category;