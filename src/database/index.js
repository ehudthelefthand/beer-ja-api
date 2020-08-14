const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(
            `mongodb://admin:password@localhost:27017/beerja?authSource=admin`,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            },
        )
    } catch (err) {
        console.log(err)
        process.exit()
    }
}