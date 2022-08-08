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
router.get('/movies', function (req, res){
    const movies = ['Rang de basanti','yeh jawaani hai diwaani','fanaa','avengar']
    res.send(movies)
})
// promblem 2
router.get('/movies/:indexNumber', function(req, res){
    const movies = ['Rang de basanti','yeh jawaani hai diwaani','fanaa','avengar']
    let request = req.params
    let index = request.indexNumber
    console.log('movies',index)
    res.send('movies')
   
    })
//promblem 3
router.get('/films', function (req, res){
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
router.get('/films-details/:name', function (req, res){
let value = req.params
console.log("This is the request "+ JSON.stringify(requestParams))
let filmNames = value.name
console.log(filmNames)
    res.send('hi')

 })

 // promblem 5
 router.get('/flims/:filmid', function(req, res){
 if (valve === req.params)}
      { return value; {
    else
    } console.log('no such valve')
})

module.exports = router;