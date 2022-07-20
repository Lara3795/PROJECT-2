const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    duration: {
        type: String,
        require: true
    },
    synopsis: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    genre: [{
        type: String,
        require: true
    }]
});

module.exports = movieSchema;