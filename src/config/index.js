const dotenv = require('dotenv')

dotenv.config({
    path:`./.env.${process.env.NODE_ENV}`
})

module.exports ={
    persistence: process.env.PERSISTENCE
}