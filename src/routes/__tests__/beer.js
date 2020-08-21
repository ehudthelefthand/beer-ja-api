const express = require('express')
const request = require('supertest')
const beer = require('../beer')
const { connect, close } = require('../../database')

const app = express()
app.use('/beers', beer())

afterAll(async() => {
    await close()
})

test('GET /beers', async (done) => {
    const res = await request(app).get('/beers')
    expect('Content-Type').toMatch(/json/)
    expect(res.status, 200)
    expect(res.body.length).toBe(1)
    done()
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

test.only('POST /beers', async () => {
    jest.setTimeout(60000);
    try {
        await connect()
    // await request(app)
    //     .post('/beers')
    //     .field('name', 'test name')
    //     .field('brand', 'test brand')
    //     .attach('image', `${__dirname}/fixture/beer.jpg`)
    //     .expect(200)
    //     .end(done)
    } catch (err) {
        throw err
    }

})

test('DELETE /beers/:id', (done) => {
    request(app)
        .delete('/beers/1')
        .expect(200, done)
})