const mongoose = require('mongoose')
const Beer = require("../beer")
const { connect, disconnect, clearDB } = require('../../database')

describe('Beer Schema', () => {

    beforeEach(async() => {
        try {
            if (mongoose.connection.readyState === 0) {
                await connect()
                await clearDB()
            } else {
                await clearDB()
            }
        } catch (err) {
            throw err
        }
    })

    afterEach(async() => {
        try {
            await disconnect()
        } catch (err) {
            throw err
        }
    })

    test('name must be required', async () => {
        expect.assertions(1);
        try {
            await Beer.create({
                price: 60,
                brand: 'Singha',
            })
        } catch (err) {
            expect(err).toBeTruthy()
        }
    })

    test('price must be required', async () => {
        expect.assertions(1);
        try {
            await Beer.create({
                name: 'Odds Lager',
                brand: 'Odds'
            })
        } catch (err) {
            expect(err).toBeTruthy()
        }
    })

    test('brand must be required', async () => {
        expect.assertions(1);
        try {
            await Beer.create({
                name: 'Odds Lager',
                price: 60
            })
        } catch (err) {
            expect(err).toBeTruthy()
        }
    })

    test('create beer successfully', async() => {
        try {
            const { _id, __v, ...beer } = (await Beer.create({
                name: 'Odds Lager',
                price: 60,
                brand: 'Odds'
            })).toObject()

            expect(_id).toBeDefined()
            expect(beer).toEqual({
                name: 'Odds Lager',
                price: 60,
                brand: 'Odds',
                reviews: []
            })
        } catch (err) {
            throw err
        }
    })
})