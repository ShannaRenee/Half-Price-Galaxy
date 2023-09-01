const { Schema, model } = require('mongoose');

const real_estateSchema = new Schema({
  item_name: {
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
  },
});

const real_estate = model('real_estate', real_estateSchema);

module.exports = real_estate;
