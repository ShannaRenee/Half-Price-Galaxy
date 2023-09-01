const { Schema, model } = require('mongoose');

const payment_typeSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 225,
  },
  lifeForm: {
    type: Schema.Types.String,
    ref: 'lifeForm',
  }
});

const payment_type = model('payment_type', payment_typeSchema);

module.exports = payment_type;
