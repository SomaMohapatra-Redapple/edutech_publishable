const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountdetail = new Schema(
    {
        "user_id": {
          "type": "Date"
        },
        "fullname": {
          "type": "String"
        },
        "email": {
          "type": "String"
        },
        "profile_picture": {
          "type": "String"
        },
        "created_by": {
          "type": "String"
        },
        "created_at": {
          "type": "String"
        },
        "updated_by": {
          "type": "String"
        },
        "updated_at": {
          "type": "String"
        }
      },{ timestamps : true }
);

const accountdetails = mongoose.model('accountdetail', accountdetail);

module.exports = accountdetails;