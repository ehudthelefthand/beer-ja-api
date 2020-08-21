const { Mongoose } = require("mongoose");

const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('beer', beerSchema)