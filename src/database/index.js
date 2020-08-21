const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect(`mongodb://localhost:27018/beerja`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    )
}

const close = () => {
    return mongoose.connection.close()
}

module.exports = {
    connect,
    close
}