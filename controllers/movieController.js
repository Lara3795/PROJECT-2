const MovieModel = require("../models/movieModel");


async function createMovie(req, res) {
  try {
    const movie = await MovieModel.create(req.body)
    res.json(movie)
  } catch (error) {
    console.log(error);
  }
}

async function findMovie(req, res) {
    try {
      const movie = await MovieModel.find(req.body)
      res.json(movie)
    } catch (error) {
      console.log(error);
    }
  }

  async function findMovieId(req, res) {
    try {
      const movie = await MovieModel.findById(req.params.id)
      res.json(movie)
    } catch (error) {
      console.log(error);
    }
  }

  async function modifyMovie(req, res) {
    try {
      const movie = await MovieModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
      res.json(movie)
    } catch (error) {
      console.log(error);
    }
  }


module.exports = {
  createMovie,
  findMovie,
  findMovieId,
  modifyMovie
};


