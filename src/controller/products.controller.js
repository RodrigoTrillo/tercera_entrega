const {Router} = require('express')
const Cart = require('../dao/models/Cart.model')
const CartDao = require('../dao/Carts.dao')
const CartItem = require('../DTOs/Cart.dto')
const router = require('../router')
const ProductDto = require('../DTOs/Product.dto')
const ProductDao = require('../dao/Products.dao')


const productController = new ProductController();

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await productController.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener un producto por su ID
router.get('/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productController.getProductById(productId);
    if (!product) {
      res.status(404).json({ message: 'Producto no encontrado' });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Crear un nuevo producto
router.post('/', async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  const productDto = new ProductDto(name, description, price, imageUrl);
  try {
    const newProduct = await productController.createProduct(productDto);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Actualizar un producto existente
router.put('/:id', async (req, res) => {
  const productId = req.params.id;
  const { name, description, price, imageUrl } = req.body;
  const productDto = new ProductDto(name, description, price, imageUrl);
  try {
    const updatedProduct = await productController.updateProduct(productId, productDto);
    if (!updatedProduct) {
      res.status(404).json({ message: 'Producto no encontrado' });
    } else {
      res.status(200).json(updatedProduct);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Eliminar un producto existente
router.delete('/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await productController.deleteProduct(productId);
    if (!deletedProduct) {
      res.status(404).json({ message: 'Producto no encontrado' });
    } else {
      res.status(200).json(deletedProduct);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




/* 
router.get('/',async (req,res)=>{
    try {
        const products= await productDao.getAll()
        res.satatus(200).json(products.map(p => new Product))
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/:id', async (req,res)=>{
    try {
        const id = parseInt(req.params)
        const product = await productDao.getByid(id)
        if(!product){
            res.status(404).json({ error: 'Product not found' });
        }else{
            res.status(200).json(new ProductDto(product));
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.post('/',async(req,res)=>{
    try {
        const productDto = new ProductDto(req.body)
        const product = await productDao.create(productDto.toModel())
        res.status(201).json(new ProductDto(product));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.put('/',async(req,res)=>{
    try {
        const id = parseInt(req.params)
        const productDto= new ProductDto(req.body)
        const updateProduct = await productDao.update(id, productDto.toModel())
        if (!updatedProduct) {
            res.status(404).json({ error: 'Product not found' });
          } else {
            res.status(200).json(new ProductDto(updatedProduct));
          }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }

})

router.delete('/:id', async (req,res)=>{
    try {
        const id = parseInt(req.params)
        const deleteProduct = await productDao.delete(id)
        if (!deleteProduct) {
            res.status(404).json({ error: 'Product not found' });
          } else {
            res.status(200).json(new ProductDto(deleteProduct));
          }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}) */

module.exports= router