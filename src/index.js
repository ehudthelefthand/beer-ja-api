const express = require('express')
const routes = require('./routes')
const database = require('./database')

(async () => {
    const app = express()

    await database()
    routes(app)

    app.use((err, req, res, next) => {
        console.log(err)
    })

   app.listen(8080, () => console.log('started at 8080'))
})
