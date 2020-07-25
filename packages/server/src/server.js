const fs = require('fs')

if (!fs.existsSync('./.env')) {
    fs.copyFileSync('./.env.example', './.env')
}

require('dotenv').config()

const express = require('express')
const middleware = require('./middleware')
const routes = require('./routes')

const app = express()
const { PORT } = process.env

middleware(app)
routes(app)

app.listen(PORT, () => console.log(`Server Running: http://localhost:${PORT}`))
