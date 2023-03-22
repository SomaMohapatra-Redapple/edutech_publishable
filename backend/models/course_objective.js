const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course_objective = new Schema(
    {
        "id": {
          "type": "String"
        },
        "course_id": {
          "type": "String"
        },
        "objective": {
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

const course_objectives = mongoose.model('course_objective', course_objective);

module.exports = course_objectives;