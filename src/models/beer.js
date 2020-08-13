const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    image: String,
    shops: [String],
    reviews: [String]
})

module.exports = mongoose.model('Beer', beerSchema)