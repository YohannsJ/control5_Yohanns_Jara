import request from 'supertest'
import { server, app } from '../../../src/index'
const movies = require('../../../src/dataset/movies.json')
import moviesController from '../../../src/actions/movies/movies'


/**
 * Test encargado de evaluar el Endpoint  /api/movies/:name
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
        expect(response.body).toEqual
        (GetMovie(1))
    })
    
    test('should respond a array with only data of The Business of Fancy Dancing', async () => {
        const response = await request(app.callback()).get(`/api/movies/`+ `The Business of Fancy Dancing`)
        expect(response.status).toBe(200)
        expect(response.body).toEqual
        (GetMovie(2))
    })
    
    test('should respond a void array ', async () => {
        const response = await request(app.callback()).get(`/api/movies/fasfqwaedwdw`)
        expect(response.status).toBe(200)
        expect(response.body).toEqual(GetMovie(0))
    })

    test('should respond a array with contain name of bat', async () => {
        const response = await request(app.callback()).get(`/api/movies/`+ `bat`)
        expect(response.status).toBe(200)
        expect(response.body).toEqual(GetMoviesWithNameIsBat())
    })
})

function GetMovie(number){
    switch (number) {
        case 1:
            return [{
                "Title": "The Land Girls",
                "US Gross": 146083,
                "Worldwide Gross": 146083,
                "US DVD Sales": null,
                "Production Budget": 8000000,
                "Release Date": "Jun 12 1998",
                "MPAA Rating": "R",
                "Running Time min": null,
                "Distributor": "Gramercy",
                "Source": null,
                "Major Genre": null,
                "Creative Type": null,
                "Director": null,
                "Rotten Tomatoes Rating": null,
                "IMDB Rating": 6.1,
                "IMDB Votes": 1071
            }];
            break;
        case 2: return [{
            "Title": "The Business of Fancy Dancing",
            "US Gross": 174682,
            "Worldwide Gross": 174682,
            "US DVD Sales": null,
            "Production Budget": 200000,
            "Release Date": "May 10 2002",
            "MPAA Rating": "Not Rated",
            "Running Time min": null,
            "Distributor": "Outrider Pictures",
            "Source": "Original Screenplay",
            "Major Genre": "Drama",
            "Creative Type": "Contemporary Fiction",
            "Director": null,
            "Rotten Tomatoes Rating": null,
            "IMDB Rating": 7,
            "IMDB Votes": 355
        }] 
            break;
        default:
            return []
            break;
    }

}

function GetMoviesWithNameIsBat(){
    return [
        {
            "Title": "Battle for the Planet of the Apes",
            "US Gross": 8800000,
            "Worldwide Gross": 8800000,
            "US DVD Sales": null,
            "Production Budget": 1800000,
            "Release Date": "Dec 31 1972",
            "MPAA Rating": null,
            "Running Time min": null,
            "Distributor": "20th Century Fox",
            "Source": null,
            "Major Genre": null,
            "Creative Type": "Science Fiction",
            "Director": "Jack Lee Thompson",
            "Rotten Tomatoes Rating": 38,
            "IMDB Rating": 5,
            "IMDB Votes": 6094
        },
        {
            "Title": "Bathory",
            "US Gross": 0,
            "Worldwide Gross": 3436763,
            "US DVD Sales": null,
            "Production Budget": 15000000,
            "Release Date": "Jul 10 2008",
            "MPAA Rating": null,
            "Running Time min": null,
            "Distributor": null,
            "Source": null,
            "Major Genre": null,
            "Creative Type": null,
            "Director": null,
            "Rotten Tomatoes Rating": null,
            "IMDB Rating": 6.1,
            "IMDB Votes": 1446
        },
        {
            "Title": "De battre mon coeur s'est arrÍtÈ",
            "US Gross": 1023424,
            "Worldwide Gross": 8589831,
            "US DVD Sales": null,
            "Production Budget": 5500000,
            "Release Date": "Jul 01 2005",
            "MPAA Rating": "Not Rated",
            "Running Time min": null,
            "Distributor": "WellSpring",
            "Source": "Original Screenplay",
            "Major Genre": "Drama",
            "Creative Type": "Contemporary Fiction",
            "Director": null,
            "Rotten Tomatoes Rating": null,
            "IMDB Rating": 7.3,
            "IMDB Votes": 7295
        },
        {
            "Title": "Bathing Beauty",
            "US Gross": 3500000,
            "Worldwide Gross": 3500000,
            "US DVD Sales": null,
            "Production Budget": 2361000,
            "Release Date": "Dec 31 1943",
            "MPAA Rating": null,
            "Running Time min": null,
            "Distributor": "MGM",
            "Source": "Original Screenplay",
            "Major Genre": "Musical",
            "Creative Type": null,
            "Director": null,
            "Rotten Tomatoes Rating": null,
            "IMDB Rating": 6.2,
            "IMDB Votes": 487
        },
        {
            "Title": "Batman Returns",
            "US Gross": 162831698,
            "Worldwide Gross": 266822354,
            "US DVD Sales": null,
            "Production Budget": 80000000,
            "Release Date": "Jun 18 1992",
            "MPAA Rating": "PG-13",
            "Running Time min": null,
            "Distributor": "Warner Bros.",
            "Source": "Original Screenplay",
            "Major Genre": "Action",
            "Creative Type": "Super Hero",
            "Director": "Tim Burton",
            "Rotten Tomatoes Rating": 78,
            "IMDB Rating": 6.9,
            "IMDB Votes": 78673
        },
        {
            "Title": "Batman Forever",
            "US Gross": 184031112,
            "Worldwide Gross": 336529144,
            "US DVD Sales": null,
            "Production Budget": 100000000,
            "Release Date": "Jun 16 1995",
            "MPAA Rating": "PG-13",
            "Running Time min": null,
            "Distributor": "Warner Bros.",
            "Source": "Original Screenplay",
            "Major Genre": "Action",
            "Creative Type": "Super Hero",
            "Director": "Joel Schumacher",
            "Rotten Tomatoes Rating": 43,
            "IMDB Rating": 5.4,
            "IMDB Votes": 76218
        },
        {
            "Title": "Batman - The Movie",
            "US Gross": 0,
            "Worldwide Gross": 0,
            "US DVD Sales": null,
            "Production Budget": 1377800,
            "Release Date": "Aug 21 2001",
            "MPAA Rating": null,
            "Running Time min": null,
            "Distributor": null,
            "Source": null,
            "Major Genre": null,
            "Creative Type": null,
            "Director": null,
            "Rotten Tomatoes Rating": null,
            "IMDB Rating": null,
            "IMDB Votes": null
        },
        {
            "Title": "Batman",
            "US Gross": 251188924,
            "Worldwide Gross": 411348924,
            "US DVD Sales": null,
            "Production Budget": 35000000,
            "Release Date": "Jun 23 1989",
            "MPAA Rating": "PG-13",
            "Running Time min": null,
            "Distributor": "Warner Bros.",
            "Source": "Based on Comic/Graphic Novel",
            "Major Genre": "Action",
            "Creative Type": "Super Hero",
            "Director": "Tim Burton",
            "Rotten Tomatoes Rating": 71,
            "IMDB Rating": 7.6,
            "IMDB Votes": 111464
        },
        {
            "Title": "Gremlins 2: The New Batch",
            "US Gross": 41476097,
            "Worldwide Gross": 41476097,
            "US DVD Sales": null,
            "Production Budget": 50000000,
            "Release Date": "Jun 15 1990",
            "MPAA Rating": null,
            "Running Time min": null,
            "Distributor": "Warner Bros.",
            "Source": "Original Screenplay",
            "Major Genre": "Comedy",
            "Creative Type": "Fantasy",
            "Director": "Joe Dante",
            "Rotten Tomatoes Rating": null,
            "IMDB Rating": 6.1,
            "IMDB Votes": 22712
        },
        {
            "Title": "Mortal Kombat",
            "US Gross": 70433227,
            "Worldwide Gross": 122133227,
            "US DVD Sales": null,
            "Production Budget": 20000000,
            "Release Date": "Aug 18 1995",
            "MPAA Rating": "PG-13",
            "Running Time min": null,
            "Distributor": "New Line",
            "Source": "Based on Game",
            "Major Genre": "Action",
            "Creative Type": "Fantasy",
            "Director": "Paul Anderson",
            "Rotten Tomatoes Rating": 35,
            "IMDB Rating": 5.4,
            "IMDB Votes": 29605
        },
        {
            "Title": "Batman Begins",
            "US Gross": 205343774,
            "Worldwide Gross": 372353017,
            "US DVD Sales": null,
            "Production Budget": 150000000,
            "Release Date": "Jun 15 2005",
            "MPAA Rating": "PG-13",
            "Running Time min": 140,
            "Distributor": "Warner Bros.",
            "Source": "Based on Comic/Graphic Novel",
            "Major Genre": "Action",
            "Creative Type": "Super Hero",
            "Director": "Christopher Nolan",
            "Rotten Tomatoes Rating": 84,
            "IMDB Rating": 8.3,
            "IMDB Votes": 270641
        },
        {
            "Title": "Battlefield Earth: A Saga of the Year 3000",
            "US Gross": 21471685,
            "Worldwide Gross": 29725663,
            "US DVD Sales": null,
            "Production Budget": 80000000,
            "Release Date": "May 12 2000",
            "MPAA Rating": "PG-13",
            "Running Time min": 121,
            "Distributor": "Warner Bros.",
            "Source": "Based on Book/Short Story",
            "Major Genre": "Action",
            "Creative Type": "Science Fiction",
            "Director": null,
            "Rotten Tomatoes Rating": null,
            "IMDB Rating": 2.3,
            "IMDB Votes": 39316
        },
        {
            "Title": "Bats",
            "US Gross": 10155691,
            "Worldwide Gross": 10155691,
            "US DVD Sales": null,
            "Production Budget": 6500000,
            "Release Date": "Oct 22 1999",
            "MPAA Rating": "R",
            "Running Time min": null,
            "Distributor": "Sony/Columbia",
            "Source": "Original Screenplay",
            "Major Genre": "Horror",
            "Creative Type": "Science Fiction",
            "Director": null,
            "Rotten Tomatoes Rating": 17,
            "IMDB Rating": 3.3,
            "IMDB Votes": 5565
        },
        {
            "Title": "The Battle of Shaker Heights",
            "US Gross": 280351,
            "Worldwide Gross": 280351,
            "US DVD Sales": null,
            "Production Budget": 1000000,
            "Release Date": "Aug 22 2003",
            "MPAA Rating": "PG-13",
            "Running Time min": null,
            "Distributor": "Miramax",
            "Source": "Original Screenplay",
            "Major Genre": "Comedy",
            "Creative Type": null,
            "Director": null,
            "Rotten Tomatoes Rating": 43,
            "IMDB Rating": 6.1,
            "IMDB Votes": 2524
        },
        {
            "Title": "Batman & Robin",
            "US Gross": 107325195,
            "Worldwide Gross": 238317814,
            "US DVD Sales": null,
            "Production Budget": 125000000,
            "Release Date": "Jun 20 1997",
            "MPAA Rating": "PG-13",
            "Running Time min": 130,
            "Distributor": "Warner Bros.",
            "Source": "Original Screenplay",
            "Major Genre": "Action",
            "Creative Type": "Super Hero",
            "Director": "Joel Schumacher",
            "Rotten Tomatoes Rating": 11,
            "IMDB Rating": 3.5,
            "IMDB Votes": 81283
        },
        {
            "Title": "The Great Debaters",
            "US Gross": 30226144,
            "Worldwide Gross": 30226144,
            "US DVD Sales": 24133037,
            "Production Budget": 15000000,
            "Release Date": "Dec 25 2007",
            "MPAA Rating": "PG-13",
            "Running Time min": 130,
            "Distributor": "Weinstein Co.",
            "Source": "Based on Real Life Events",
            "Major Genre": "Drama",
            "Creative Type": "Dramatization",
            "Director": "Denzel Washington",
            "Rotten Tomatoes Rating": 79,
            "IMDB Rating": 7.6,
            "IMDB Votes": 14530
        },
        {
            "Title": "Mortal Kombat: Annihilation",
            "US Gross": 35927406,
            "Worldwide Gross": 51327406,
            "US DVD Sales": null,
            "Production Budget": 30000000,
            "Release Date": "Nov 21 1997",
            "MPAA Rating": "PG-13",
            "Running Time min": 91,
            "Distributor": "New Line",
            "Source": "Based on Game",
            "Major Genre": "Action",
            "Creative Type": "Fantasy",
            "Director": null,
            "Rotten Tomatoes Rating": 7,
            "IMDB Rating": 3.2,
            "IMDB Votes": 16672
        },
        {
            "Title": "Night at the Museum: Battle of the Smithsonian",
            "US Gross": 177243721,
            "Worldwide Gross": 413054631,
            "US DVD Sales": 48547729,
            "Production Budget": 150000000,
            "Release Date": "May 22 2009",
            "MPAA Rating": "PG",
            "Running Time min": 104,
            "Distributor": "20th Century Fox",
            "Source": "Based on Book/Short Story",
            "Major Genre": "Comedy",
            "Creative Type": "Fantasy",
            "Director": "Shawn Levy",
            "Rotten Tomatoes Rating": null,
            "IMDB Rating": 5.9,
            "IMDB Votes": 25631
        }
    ]
}
