const { Router } = require('express')

module.exports = () => {
    const data = [{
        id: 1,
        reviews: [{
            id: 1,
        }]
    }]

    const router = Router()

    router.get('/', (req, res) => {
        res.json(data)
    })

    router.get('/:id', (req, res) => {
        res.json(data[0])
    })

    router.post('/', (req, res) => {
        res.sendStatus(200)
    })

    return router
}