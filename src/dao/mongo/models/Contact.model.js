const mongoose= require('mongoose')

const collectionName = 'contact'

const collectionSchema = new mongoose.Schema({
    name:String,
    lastname: String,
    active: Boolean,
    phone: String
})

const Contacts = mongoose.model(collectionName, collectionSchema)

module.exports = Contacts