const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(allTheMoviesFromDB => {
        console.log('Retrieved movies from DB:', allTheMoviesFromDB);
           res.render('movies.hbs', { movies: allTheMoviesFromDB }); 
      })
      .catch(error => {
        console.log('Error while getting the books from the DB: ', error);
        next(error);
      });
  });
router.get('/movies/:movieId', (req, res, next) => {
    const { movieId } = req.params;
    console.log('The ID from the URL is: ', movieId);

    Movie.findById(movieId)
    .then(theMovie => res.render('details.hbs', { data: theMovie }))
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
 
      next(error);
    });
});


module.exports = router;
