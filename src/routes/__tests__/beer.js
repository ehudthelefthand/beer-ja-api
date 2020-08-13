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
        .end((err, res) => {
            if (err) return done(err)
            expect(res.body.length).toBe(1)
            done()
        })
})

test('GET /beers/:id', (done) => {
    request(app)
        .get('/beers/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            expect(res.body.id).toBeDefined()
            expect(res.body.reviews.length).toBe(1)
            expect(res.body.reviews[0].id).toBeDefined()
            done()
        })
})

test('POST /beers', (done) => {
    request(app)
        .post('/beers')
        .field('name', 'test name')
        .field('brand', 'test brand')
        .attach('image', `${__dirname}/fixture/beer.jpg`)
        .expect(200, done)
})