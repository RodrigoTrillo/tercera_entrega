const {Router} = require('express')
const Contacts = require('../dao/mongo/models/Contact.model')
const ContactMongoDao = require('../dao/Contacts.dao')
const ContactDTO = require('../DTOs/Contact.dto')


const Contacts = require('../dao/factory')
const router = Router()

router.get('/', async (req,res)=>{
    try {
        const users = await Contacts.getAll()
        res.json({status: 'success', message: users})
    } catch (error) {
        res.json(error)
    }
})


router.post('/', async(req,res)=>{
    try {
        const contact = req.body

        const newContact = await Contacts.create(newUserInfo)
        res.json({status: 'success',message:newContact})
    } catch (error) {
        res.json(error)
        
    }
})

module.exports = router 