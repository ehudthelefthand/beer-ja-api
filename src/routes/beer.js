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

    return router
}