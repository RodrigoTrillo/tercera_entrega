class ContactsMemoryDao{
    constructor(){
        this.data = []
    }

    getAll(){
        return this.data
    }

    async create(newUserInfo){
        this.data.push(newUserInfo)
        return 'Usuario creado con exito'
    }

}

module.exports = ContactsMemoryDao