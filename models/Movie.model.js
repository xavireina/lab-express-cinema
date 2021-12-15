const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { 
    type: String, 
    required: true, 
    unique: true 
  },
  director: {
    type: String,
    required: true,
  },
  stars: [String],
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  }, 
  description: {
    type: String,
  },
  showtimnes: [String],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;