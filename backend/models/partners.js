
const { Binary } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partner = new Schema(
    {
        "id": {
          "type": "Date"
        },
        "name": {
          "type": "String"
        },
        "image": {
          "type": "String"
        },
        "Website": {
          "type": "String"
        },
        "status": {
          "type": "String"
        }
      },{ timestamps : true }
);

const partners = mongoose.model('partner', partner);

module.exports = partners;