const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otp = new Schema(
    {
        "id": {
          "type": "Date"
        },
        "phone_number": {
          "type": "String"
        },
        "otp": {
          "type": "String"
        },
        "created_at": {
          "type": "String"
        },
        "expire_at": {
          "type": "String"
        }
      },{ timestamps : true }
);

const otps = mongoose.model('otp', otp);

module.exports = otps;