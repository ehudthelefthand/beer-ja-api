const beer = require('./beer')

module.exports = (app) => {
    app.use('/beers', beer())
}