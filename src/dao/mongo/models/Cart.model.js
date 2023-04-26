const mongoose = require('mongoose')

const cartCollection = 'cart'

const cartSchema = mongoose.Schema({
    product:{
        type:[{
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref: 'product'
            },
            quantity:{
                type:Number,
                default:1
            }
        }],
        default: []
    }
})


const Cart = mongoose.model(cartCollection,cartSchema)

module.exports = Cart