const mongoConnect = require("../../db");
const { persistence } = require("../config");





switch (persistence) {
    case 'MONGO':
        mongoConnect()
        module.exports = require('../dao/Contacts.dao')
        break;

    case 'MEMORY':
        module.exports= require('../dao/memory/Contacts.memory')
        break;


    case 'FILES':
        module.exports = require('../dao/file/Contact.file')
        break;
}