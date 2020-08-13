const { Router } = require('express')
const multer = require('multer')
const path = require('path')
const Beer = require('../models/beer')

module.exports = () => {
    const data = [{
        id: 1,
        reviews: [{
            id: 1,
        }]
    }]

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/')
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}${path.extname(file.originalname)}`)
        }
    })

    const upload = multer({ storage })

    const router = Router()

    router.get('/', (req, res) => {
        res.json(data)
    })

    router.get('/:id', (req, res) => {
        res.json(data[0])
    })

    router.post('/', upload.single('image'), async (req, res, next) => {
        try {
            await Beer.create(req.body)
            res.sendStatus(200)
        } catch (err) {
            console.log(err)
            next(err)
        }
    })

    router.delete('/:id', (req, res) => {
        res.sendStatus(200)
    })

    return router
}