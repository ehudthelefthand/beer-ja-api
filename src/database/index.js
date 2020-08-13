const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(
            `mongodb://localhost:27017/beerja`,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            },
        )
    } catch (err) {
        process.exit()
    }
}