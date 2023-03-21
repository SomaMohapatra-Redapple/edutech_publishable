
const { Binary } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const level = new Schema(
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
      }
    
      
);

const levels = mongoose.model('level', level);

module.exports = levels;