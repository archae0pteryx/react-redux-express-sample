const axios = require('axios').default
const { API_URL } = process.env

async function getPosts () {
    try {
        const { data } = await axios.get(`${API_URL}`)
        return handleSuccess(data)
    } catch (e) {
        return handleError(e)
    }
}

function handleError (e) {
    console.error(e)
    return {
        status: 'error',
        message: e && e.message || e
    }
}

function handleSuccess (data) {
    return {
        status: 'success',
        data
    }
}

module.exports = {
    getPosts
}
