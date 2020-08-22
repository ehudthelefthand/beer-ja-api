const mongoose = require('mongoose')
const Beer = require("../beer")
const { connect, disconnect } = require('../../database')

describe('Beer Schema', () => {

    beforeEach(async() => {
        const clearDB = async () => {
            try {
                for (let i in mongoose.connection.collections) {
                    await mongoose.connection.collections[i].deleteMany()
                }
            } catch (err) {
                throw err
            }
        }

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
            const beer = await Beer.create({
                name: 'Odds Lager',
                price: 60,
                brand: 'Odds'
            })
            expect(beer._id).toBeDefined()
            expect(beer.name).toBe('Odds Lager')
            expect(beer.price).toBe(60)
            expect(beer.brand).toBe('Odds')
            expect(beer.reviews instanceof Array).toBeTruthy()
        } catch (err) {
            throw err
        }
    })
})