const express = require('express');

const router = express.Router();

// Problem No-1

router.get('/movies', function (req, res) {

    let movies = ["dabang", "RRR", "KGF2", "PUSHPA", "DDLG", "major", "The Kashmir Files", "Runway 34", "Shamshera", "Avenger", "Spiderman-no way home", "Gangubai Kathiawadi"]
res.send(movies)
});

// Problem No-2 + Problem No-3

router.get('/movies/:indexNumber', function (req, res) {

    let movies = [ "The Kashmir Files", "Runway 34", "Shamshera", , "Spiderman-no way home", "Gangubai Kathiawadi"]
    let movieIndex = req.params.indexNumber
    let finalMovieslist = " ";
    if (movieIndex < movies.length) {
        finalMovieslist = movies[movieIndex] 
    } else {
        finalMovieslist = ("Movies doesn not exist " + movies.length)
    }
res.send(finalMovieslist)

});

// // Problem No-4 

router.get('/films', function (req, res) {

    let arr = [ {
        id: 1,
        name: "The Shining",
       }, {
        id: 2,
        name: "Incendies",
       }, {
        id: 3,
        name: "Rang de Basanti",
       }, {
        id: 4,
        name: "Finding Nemo",
       }]

res.send(arr)

});

// // Problem No-5

router.get('/films/:filmId', function (req, res) {

    let arr = [ {
        id: 1,
        name: "The Shining",
       }, {
        id: 2,
        name: "Incendies",
       }, {
        id: 3,
        name: "Rang de Basanti",
       }, {
        id: 4,
        name: "Finding Nemo",
       }]
       
       filmIndex = req.params.filmId

       function idLookup (x) {
        return x.id ;
    }
    let getId = arr.map (idLookup)
    
       let finalFilm = " " 
    
       if ( filmIndex <= getId.length ) {
           finalFilm = arr[filmIndex-1]
       } else {
           finalFilm = ( "Please enter number equal to or below := " + getId.length + ",No movie exists with this id")
       }

res.send(finalFilm)

});


module.exports = router;
// adding this comment for no reason