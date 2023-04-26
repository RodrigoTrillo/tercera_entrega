const fs = require('fs')



class ContactFileDao{
    constructor(){}

    async getAll(){
        try {
           const data = await fs.promises.readFile(process.cwd()+ '/files/Contacts.json')
           const contacts = JSON.parse(data)
           return contacts
        } catch (error) {
            throw error
        }
    }

    async create(newUserInfo){
        fs.promises.writeFile()
    }
    
}

module.exports = ContactFileDao