const authController = require('../auth/controller.auth')
const cartController = require('../controller/carts.controller')
const contactsController = require('../controller/contacts.controller')


const router = app =>{
    app.use('/contacts', contactsController)
    //app.use('/', viewsTemplateController)
    //app.use('/users', usersController)
    //app.use('/api/products', productsController)
    app.use('/api/carts', cartController)
    app.use('/auth', authController)
}
 
module.exports= router