const { Schema, model } = require('mongoose');

const payment_typeSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 15,
  },
  lifeForm: {
    type: Schema.Types.ObjectId,
    ref: 'lifeForm',
  }
});

const payment_type = model('payment_type', payment_typeSchema);

module.exports = payment_type;
