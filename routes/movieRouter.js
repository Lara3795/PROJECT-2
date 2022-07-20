const router = require("express").Router();

const { checkRol, checkAuth, checkAuthEmployee } = require('../utils')

const {
    createMovie,
    findMovie,
    findMovieId,
    modifyMovie,
    deleteMovie
} = require("../controllers/movieController")

router
    .post("/",checkAuthEmployee, checkRol, createMovie)
    .get("/", findMovie)
    .get("/:id", findMovieId)
    .put("/:id", checkRol, modifyMovie)
    .delete("/:id", checkRol, deleteMovie)


module.exports = router;