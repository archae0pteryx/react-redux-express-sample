const morgan = require('morgan')
const cors = require('cors')
module.exports = function middleware (app) {
    app.use(morgan('tiny'))
    app.use(cors())
}
