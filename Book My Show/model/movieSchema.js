const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    movieName: {
        type: String,
        required: true
    },

    votes: {
        type: Number,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    language: {
        type: String,
        required: true
    },

    relDate: {
        type: Date,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    aboutMovie: {
        type: String,
        required: true
    },

});

const crud = mongoose.model("movieTicketPr", movieSchema);

module.exports = crud