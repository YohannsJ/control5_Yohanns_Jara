import request from 'supertest'
import { server, app } from '../../../src/index'

/**
 * Test de Endpoin /api/movies/rating/:classifier/:order
 */
describe('GET /api/movies/rating/:classifier/:order', () => {
    afterAll(() => {
        server.close()
    })

    test('should respond ok message', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/:classifier/:order')
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ message: 'ok' })
    })
})
