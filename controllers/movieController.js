const MovieModel = require("../models/movieModel");


async function createMovie(req, res) {
  try {
    const movie = await MovieModel.create(req.body)
    res.json(movie)
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  createMovie
};
