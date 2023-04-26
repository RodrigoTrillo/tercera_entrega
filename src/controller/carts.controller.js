const {Router} = require('express')
const Cart = require('../dao/models/Cart.model')
const CartDao = require('../dao/Carts.dao')
const CartItem = require('../DTOs/Cart.dto')


const router = Router()


router.get('/', async (req,res)=>{
    const carts = await Cart.find()
    res.json(carts.getItem())
})

router.post('/items', async (req,res)=>{
    try {
        const productId = req.body
        const quantity = parseInt(req.body.quantity)

        if(!productId || isNaN(quantity)){
            res.json({message: 'Invalid request Body'})
        }

        const cartItem = await CartDao.getItem(productId)
        
        if(cartItem){
            cartItem.quantity += quantity
            await CartDao.updateItem(cartItem)
        } else {
            const newCartItem = new CartItem({
                productId,
                quantity
            })
            await CartDao.addItem(newCartItem)
        }

    } catch (error) {
        res.status(500).json({status: 'error', message:'Internal Server Error'})
    }
})


router.put('/items/:id', async (req,res)=>{
    try {
        const productId= req.params.productId
        const quantity= parseInt(req.body.quantity)
    
        if(isNaN(quantity)){
            res.json({message: 'Invalid request Body'})
        }
        
        const cartItem = await CartDao.getItem(productId)

        if(cartItem){
            cartItem.quantity = quantity
            await CartDao.updateItem(cartItem)
            res.status(200).json()
        } else {
            res.status(400).json()
        }
    } catch (error) {
        res.status(500).json({status: 'error', message:'Internal Server Error'})
    }
})

router.delete('/items/:id', async (req,res)=>{
    try {
        const productId= req.params.productId
        const cartItem = await CartDao.getItem(productId)

        if(cartItem){
            await CartDao.removeItems(cartItem.id)
            return Cart
        }
    } catch (error) {
        res.status(500).json({status: 'error', message:'Internal Server Error'})
    }
})

router.delete('/', async (req,res)=>{
    try {
        await CartDao.clearCart()
    } catch (error) {
        res.status(500).json({status: 'error', message:'Internal Server Error'})
    }
})