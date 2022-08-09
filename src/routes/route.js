const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

// problem 1
router.get('/movies', function (req, res) {
    const movies = ['Rang de basanti', 'yeh jawaani hai diwaani', 'fanaa', 'avengar']
    res.send(movies)
   })

    // promblem 2 n 3
    router.get('/movies/:indexNumber', function (req, res) {
        const movies = ['Rang de basanti', 'yeh jawaani hai diwaani', 'fanaa', 'avengar']
        console.log(req.params.indexNumber)
        let Index = req.params.indexNumber
        if (Index < 0 || Index >= movies.length) {
            return res.send('The index value is not correct, Please check the it')
        }
        let requiredMovie = movies[Index]
        res.send(requiredMovie)

    })

    // promblem 4
    router.get('/films', function (req, res) {
        const films = [{
            'id': 1,
            'name': 'The Shining'
        }, {
            'id': 2,
            'name': 'Incendies'
        }, {
            'id': 3,
            'name': 'Rang de Basanti'
        }, {
            'id': 4,
            'name': 'Finding Nemo'
        }]
        res.send(films)
    })
    // promblem 5

    router.get("/films/:filmId", function (req, res) {
        const films = [{
            "id": 1,
            "name": "The Shining"
        }, {
            "id": 2,
            "name": "Incendies"
        }, {
            "id": 3,
            "name": "Rang de Basanti"
        }, {
            "id": 4,
            "name": "Finding Nemo"
        }]

        let filmId = req.params.filmId
        for (let i = 0; i < films.length; i++) {
            let film = films[i]
            if (film.id == filmId) {
                return res.send(film)
            }
        }
        res.send("The film id doesn't match any movie")
    })
    module.exports = router;