const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const language = new Schema(
    {
        "id": {
          "type": "Date"
        },
        "name": {
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

const languages = mongoose.model('language', language);

module.exports = languages;