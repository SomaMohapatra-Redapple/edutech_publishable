const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usertype = new Schema(
    {
        "id": {
          "type": "Date"
        },
        "type": {
          "type": "String"
        },
        "name": {
          "type": "String"
        },
        "created_at": {
          "type": "String"
        }
      },{ timestamps : true }
);

const usertypes = mongoose.model('usertype', usertype);

module.exports = usertypes;