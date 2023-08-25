const { Schema, model } = require('mongoose');

const catagorySchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
  },
});

const catagories = model('catagories', catagorySchema);

module.exports = catagories;
