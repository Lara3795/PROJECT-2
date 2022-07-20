const mongoose = require("mongoose");
const movieSchema = require("./movieModel")
const roomSchema = require("./roomModel")

const screeningSchema = new mongoose.Schema({
    movie: [movieSchema],
    room: [roomSchema],
    start: {
        type: Date,
        require: true
    },
    ocupation: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    employee: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "employee"
    }]
  
});

const ScreeningModel = mongoose.model('screening', screeningSchema);

module.exports = ScreeningModel;