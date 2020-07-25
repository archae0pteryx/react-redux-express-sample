const { getPosts } = require('./service')

module.exports = function routes (app) {
    app.get('/heartbeat', (req, res) => {
        res.send('ok')
    })

    app.get('/posts', async (req, res) => {
        const resp = await getPosts()
        res.send(JSON.stringify(resp))
    })
}
