const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const admin_login = new Schema(
    {
        user_name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
},{ timestamps : true }
);

const Admin_login = mongoose.model('ad_login', admin_login);

module.exports = Admin_login;