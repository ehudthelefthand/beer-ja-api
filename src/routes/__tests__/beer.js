const express = require('express')
const request = require('supertest')
const beer = require('../beer')

const app = express()
app.use('/beers', beer())

test('GET /beers', (done) => {
    request(app)
        .get('/beers')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(done)
})