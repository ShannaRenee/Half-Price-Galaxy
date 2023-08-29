const { Schema, model } = require('mongoose');

const gen_merchSchema = new Schema({
  item_name: {
    type: String,
    required: true,
    maxLength: 100,
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
  },
});

const gen_merch = model('gen_merch', gen_merchSchema);

module.exports = gen_merch;
