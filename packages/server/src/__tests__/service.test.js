const axios = require('axios')
const {
    getPosts
} = require('../service')

jest.mock('axios')

describe('express service', () => {
    describe('post fetching',  () => {
        it('should return success obj', async () => {
            axios.get.mockResolvedValue({ data: 'test' })
            const res = await getPosts()
            expect(res.status).toBe('success')
        })
    })
})
