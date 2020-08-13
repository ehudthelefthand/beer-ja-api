const express = require('express')

const app = express()

app.get('/', (req, res) => {
    // res.end('hello')
    res.sendStatus(500)
})

app.listen(8080, () => console.log('started at 8080'))