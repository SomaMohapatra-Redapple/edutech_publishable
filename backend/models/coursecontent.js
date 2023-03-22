const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coursecontent = new Schema(
    {
        "id": {
          "type": "Date"
        },
        "course_id": {
          "type": "Date"
        },
        "sections": {
          "type": [
            "Mixed"
          ]
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

const coursecontents = mongoose.model('coursecontent', coursecontent);

module.exports = coursecontents;