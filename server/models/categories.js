const { Schema, model } = require('mongoose');

const categoriesSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
  },
});

const categories = model('categories', categoriesSchema);

module.exports = categories;
