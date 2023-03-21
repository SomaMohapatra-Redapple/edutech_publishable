
const { Binary } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testimonial = new Schema(
    {
        "id": {
          "type": "Date"
        },
        "title": {
          "type": "String"
        },
        "message": {
          "type": "String"
        },
        "client_name": {
          "type": "String"
        },
        "client_image": {
          "type": "String"
        },
        "designation": {
          "type": "String"
        },
        "location": {
          "type": "String"
        },
        "status": {
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

const testimonials = mongoose.model('testimonial', testimonial);

module.exports = testimonials;