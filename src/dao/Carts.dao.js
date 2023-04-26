const Cart = require("./models/Cart.model");

class CartDao {
    constructor(){
       
    }

    async getCart(){
        try {
            return await Cart()
        } catch (error) {
            throw error
        }
    }

    async addItem(productId,name, price, quantity){
        try {
            return await Cart.addItem(productId, name, price, quantity)
        } catch (error) {
            throw error
        }
    }

    async updateItem(productId, quantity){
        try {
            return await Cart.updateItem(productId, quantity)
        } catch (error) {
            throw error
        }
    }

    async removeItem(productId){
        try {
            return await Cart.removeItem(productId)
        } catch (error) {
            throw error
        }
    }

    async clearCart(){
        try {
            return await Cart()
        } catch (error) {
            throw error
        }
    }


}

module.exports = CartDao