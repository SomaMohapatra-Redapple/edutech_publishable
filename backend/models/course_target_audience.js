const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course_target_audience = new Schema(
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

const course_target_audiences = mongoose.model('course_target_audience', course_target_audience);

module.exports = course_target_audiences;