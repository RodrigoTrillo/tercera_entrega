const Contacts = require("./mongo/models/Contact.model");

class ContactMongoDao {
    constructor(){}

    async getAll(){
        try {
            return await Contacts.find()
        } catch (error) {
            throw error
        }
    }

    async create(newUserInfo){
        try {
            return await Contacts.create(newUserInfo)
        } catch (error) {
            throw error
        }
    }
}


module.exports = ContactMongoDao