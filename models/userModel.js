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
  peliculasVistas: {
    type: String,
    //??
  },
  peliculasCompradas: {
    type: String,
    //??
  },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
