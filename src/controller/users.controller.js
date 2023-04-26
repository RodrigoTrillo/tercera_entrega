const {Router} = require('express')

const UsersDAO = require('..dao/Users.dao')

const Users = new UsersDAO()
const router = Router()

router.get('/', async(req,res)=>{
    try {
        const users = await Users.getAll()
    } catch (error) {
        console.log(error.message)
        res.status(500).json({status: 'error', message:'Internal Server Error'})
    }
})

router.get('/:id', async (req,res)=>{
    try {
        const {id} = req.params
        const user = await Users.getOne(id)
        res.json({status:'Success', message: user})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({status: 'error', message:'Internal Server Error'})
    }
})

router.post('/',async (req,res)=>{
    try {
        const userinfo = req.body
        const newUser = await Users.create(userinfo)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({status: 'error', message:'Internal Server Error'})
    }
})

module.exports = router