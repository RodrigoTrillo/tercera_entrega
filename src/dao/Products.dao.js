const ProductDto = require('../DTOs/Product.dto');
const Product = require('./mongo/models/Products.model');

class ProductDao {
    async createProduct(productDto) {
      const product = new Product(productDto);
      await product.save();
      return product;
    }
  
    async getProductById(productId) {
      const product = await Product.findById(productId);
      return product;
    }
  
    async updateProduct(productId, productDto) {
      const product = await Product.findByIdAndUpdate(productId, productDto, {
        new: true,
      });
      return product;
    }
  
    async deleteProduct(productId) {
      const product = await Product.findByIdAndDelete(productId);
      return product;
    }
  
    async getAllProducts() {
      const products = await Product.find();
      return products;
    }
  }

module.exports = ProductDao;
