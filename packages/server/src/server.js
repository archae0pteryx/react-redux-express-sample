const express = require('express')
const app = express()
const { PORT } = process.env

app.get('/', (req, res) => res.send('poop'))

app.listen(PORT, () => console.log(`Server Running: http://localhost:${PORT}`))
