const express = require('express')
const app = express()

const port = 3001

app.get('/', (req, res) => res.send('poop'))

app.listen(port, () => console.log(`Server Running: http://localhost:${port}`))
