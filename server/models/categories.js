const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
  },
});

const categories = model('catagories', categorySchema);

module.exports = categories;
