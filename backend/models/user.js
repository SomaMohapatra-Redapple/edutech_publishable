const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema(
    {
        "id": {
          "type": "String"
        },
        "phone_number": {
          "type": "String"
        },
        "user_type": {
          "type": "String"
        },
        "status": {
          "type": "String"
        },
        "created_at": {
          "type": "Date"
        }
      },{ timestamps : true }
);

const users = mongoose.model('user', user);

module.exports = users;