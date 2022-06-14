import request from 'supertest'
import { server, app } from '../../../src/index'
const movies = require('../../../src/dataset/movies.json')
import moviesController from '../../../src/actions/movies/movies'


/**
 * El objetivo de este test de integración es probar
 * el endpoint para evaluar si la aplicación responde
 */

describe('GET /api/movies/:name', () => {
    afterAll(() => {
        server.close()
    })
    /**
     * 3 Pruebas con diferentes peliculas y 1 sin nombre y otra nombre erroneo 
    */
    test('should respond a array with only data of The Land Girls', async () => {
        const response = await request(app.callback()).get(`/api/movies/`+ `The Land Girls`)
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesController.getMoviesByName('The Land Girls'))
    })
    
    test('should respond a array with only data of The Business of Fancy Dancing', async () => {
        const response = await request(app.callback()).get(`/api/movies/`+ `The Business of Fancy Dancing`)
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesController.getMoviesByName('The Business of Fancy Dancing'))
    })
    
    test('should respond a void array ', async () => {
        const response = await request(app.callback()).get(`/api/movies/fasfqwaedwdw`)
        expect(response.status).toBe(200)
        expect(response.body).toEqual([])
    })

    // test('should respond a array with only data of The Land Girls', async () => {
    //     const response = await request(app.callback()).get(`/api/movies/`+ `The Land Girls`)
    //     expect(response.status).toBe(200)
    //     expect(response.body).toEqual(moviesController.getMoviesByName('The Land Girls'))
    // })
})
