const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course_requirement = new Schema(
    {
        "id": {
          "type": "Date"
        },
        "course_id": {
          "type": "Date"
        },
        "requirement": {
          "type": "String"
        },
        "created_by": {
          "type": "String"
        },
        "created_at": {
          "type": "String"
        }
      },{ timestamps : true }
);

const course_requirements = mongoose.model('course_requirement', course_requirement);

module.exports = course_requirements;