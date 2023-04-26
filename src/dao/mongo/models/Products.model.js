const mongoose = require('mongoose');

const productCollection = 'product'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

const Product = mongoose.model(productCollection, productSchema);

module.exports = Product;
