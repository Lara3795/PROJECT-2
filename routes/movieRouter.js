const router = require("express").Router();

const {
    createMovie,
    findMovie,
    findMovieId,
    modifyMovie,
    deleteMovie
} = require("../controllers/movieController")

router
    .post("/", createMovie)
    .get("/", findMovie)
    .get("/:id", findMovieId)
    .put("/:id", modifyMovie)
    .delete("/:id", deleteMovie)


module.exports = router;