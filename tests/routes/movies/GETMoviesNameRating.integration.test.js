import request from 'supertest'
import { server, app } from '../../../src/index'
import moviesController from '../../../src/actions/movies/movies.js'

/**s
 * Test de Endpoin /api/movies/rating/:classifier/:order
 */
describe('GET /api/movies/rating/:classifier/:order', () => {
    
    afterAll(() => {
        server.close()
    })

    test('Error', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/:classifier/:order')
        expect(response.status).toBe(500)
        expect(response.body).toEqual([])
    })
    
    test('asc', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/:asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesController.getMoviesByClassifier("imbd","asc"))
    })
    
    test('dsc', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/dsc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesController.getMoviesByClassifier("imbd","dsc"))
    })
})


getMoviesByClassifier