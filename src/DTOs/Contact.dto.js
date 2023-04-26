class ContactDTO{
    constructor(contact){
        this.name = contact.firs_name
        this.lastname = contact.last_name
        this.active= true
        this.phone = contact.phone ? contact.phone.split('-').join('') :''
    }
}

module.exports = ContactDTO