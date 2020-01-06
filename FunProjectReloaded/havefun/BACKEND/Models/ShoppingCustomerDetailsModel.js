const mongoose = require("mongoose");
const schema = mongoose.Schema;

const customerSchema = new schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true
  },

  address1: {
    type: String,
    required: true
  },

  address2: {
    type: String,
    required: true
  },

  city: {
    type: String,
    required: true
  },

  state: {
    type: String,
    required: true
  },

  zip: {
    type: String,
    required: true
  },

  products: []
});

const userOrderDetails = mongoose.model('USER_ORDER_DETAILS', customerSchema)

module.exports = userOrderDetails;
