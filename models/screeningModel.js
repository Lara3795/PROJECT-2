const mongoose = require("mongoose");

const screeningSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie"
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "room"
    },
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