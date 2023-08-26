const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
  },
});

const categories = model('categories', categorySchema);

module.exports = categories;
