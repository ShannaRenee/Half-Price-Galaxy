const { Schema, model } = require('mongoose');

const real_estateSchema = new Schema({
  item_name: {
    type: String,
    required: true,
    maxLength: 60,
  },
  item_description: {
    type: String,
    required: true,
  },
  item_price: {
    type: String,
    required: true,
  },
  categories: {
    type: Schema.Types.ObjectId,
    ref: 'categories',
  },
});

const real_estate = model('real_estate', real_estateSchema);

module.exports = real_estate;
