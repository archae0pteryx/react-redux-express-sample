const morgan = require('morgan')

module.exports = function middleware (app) {
    app.use(morgan('tiny'))
}
