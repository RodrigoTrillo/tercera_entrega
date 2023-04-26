class ProductDto {
    constructor(id, name, description, price, imageUrl) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.imageUrl = imageUrl;
    }
  }
  
  module.exports = ProductDto;