const Beer = require("../beer")
const { connect, disconnect } = require('../../db')

describe('Beer Schema', () => {

    beforeEach(async() => {
        try {
            await connect()
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
            await disconnect()
        } catch (err) {
            expect(err).toBeTruthy()
        }
    })

    test('price must be required', async () => {
        expect.assertions(1);
        try {
            await Beer.create({
                name: 'Singha',
                brand: 'Singha'
            })
            await disconnect()
        } catch (err) {
            expect(err).toBeTruthy()
        }
    })

    test('brand must be required', async () => {
        expect.assertions(1);
        try {
            await Beer.create({
                name: 'Singha',
                price: 60
            })
            await disconnect()
        } catch (err) {
            expect(err).toBeTruthy()
        }
    })
})

// name
// price
// brand