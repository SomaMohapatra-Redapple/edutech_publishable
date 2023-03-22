const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course_prerequisite = new Schema(
  {
    "id": {
      "type": "String"
    },
    "course_id": {
      "type": "String"
    },
    "prerequisite_course_id": {
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

const course_prerequisites = mongoose.model('course_prerequisite', course_prerequisite);

module.exports = course_prerequisites;