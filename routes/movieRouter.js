const router = require("express").Router();

const { checkRol, checkAuth } = require('../utils')

const {
    createMovie,
    findMovie,
    findMovieId,
    modifyMovie,
    deleteMovie
} = require("../controllers/movieController")

router
    .post("/", checkAuth, checkRol, createMovie)
    .get("/", findMovie)
    .get("/:id", findMovieId)
    .put("/:id", checkAuth, checkRol, modifyMovie)
    .delete("/:id", checkAuth, checkRol, deleteMovie)


module.exports = router;