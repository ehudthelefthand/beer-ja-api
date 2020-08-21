const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/whatever', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

const disconnect = async () => {
    return mongoose.connection.close()
}

module.exports = {
    connect, disconnect
}