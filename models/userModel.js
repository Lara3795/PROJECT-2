const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  pastMovies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'movies'
  }],
  screenings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'screening'
  }],
  purchases: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'purchases'
  }]
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
