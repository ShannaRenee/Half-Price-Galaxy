const { Schema, model } = require('mongoose');

const travelSchema = new Schema({
  package_name: {
    type: String,
    required: true,
    maxLength: 60,
  },
  description: {
    type: String,
    required: true,
    },
  price: {
    type: String,
    required: true,
    },
  categories: {
    type: Schema.Types.ObjectId,
    ref: 'categories',
  }
});

const travel = model('travel', travelSchema);

module.exports = travel;