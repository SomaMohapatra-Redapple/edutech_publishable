const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema(
    
      {
        "id": {
          "type": "String"
        },
        "title": {
          "type": "String"
        },
        "category_id": {
          type: Schema.Types.ObjectId,
        ref: 'categories'
        },
        "subcategory_id": {
          type: Schema.Types.ObjectId,
        ref: 'sub_categories'
        },
        "instructor_id": {
          "type": "String"
        },
        "language_id": {
          "type": "String"
        },
        "level_id": {
          "type": "String"
        },
        "description": {
          "type": "String"
        },
        "tag_ids": {
          "type": [
            "String"
          ]
        },
        "preview_video": {
          "type": "String"
        },
        "course_type": {
          "type": "String"
        },
        "sale_price": {
          "type": "String"
        },
        "offer_price": {
          "type": "String"
        },
        "offer_percentage": {
          "type": "String"
        },
        "offer_expire_on": {
          "type": "String"
        },
        "allow_money_back": {
          "type": "String"
        },
        "money_back_duration": {
          "type": "String"
        },
        "money_back_duration_unit": {
          "type": "String"
        },
        "content_availability": {
          "type": "String"
        },
        "content_availability_duration_unit": {
          "type": "String"
        },
        "is_featured": {
          "type": "Date"
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
        },
        "content_last_updated_at": {
          "type": "String"
        }
      }
);

const courses = mongoose.model('course', course);

module.exports = courses;