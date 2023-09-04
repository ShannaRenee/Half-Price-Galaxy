const { Schema, model } = require('mongoose');

const travelSchema = new Schema({
  packageName: {
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
  categories_id: {
    type: Schema.Types.String,
    ref: 'categories',
  }
});

const travel = model('travel', travelSchema);

module.exports = travel;