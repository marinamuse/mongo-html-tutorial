const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://admin-marina:marinochka90@cluster0.hr1hl.mongodb.net/moviesDB?retryWrites=true&w=majority');

const moviesSchema = {
    title: String,
    genre: String,
    year: String
}

const Movie = mongoose.model('Movie', moviesSchema);

app.get('/', (req, res) => {
    Movie.find({}, function(err, movies) {
        res.render('index', {
            moviesList: movies
        })
    })
})

app.listen(4000, function() {
    console.log('server is running');
})