import request from 'supertest'
import { server, app } from '../../../src/index'
const movies = require('../../../src/dataset/movies.json');
import sinon from 'sinon'
import moviesActions from '../../../src/actions/movies/movies'
/**
 * Test encargado de evaluar el Endpoint  /api/movies
 */
describe('GET /api/movies', () => {
    afterAll(() => {
        server.close()
    })

    test('should respond an array with all movies', async () => {
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(movies)
    })
    
    // test('should respond an Void array ', async () => {
    //     sinon.stub(moviesActions,'getAllMovies').return([])
    //     const response = await request(app.callback()).get('/api/movies')
    //     expect(response.status).toBe(500)
    //     expect(response.body).toEqual([])
    // })
})
