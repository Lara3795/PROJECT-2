const router = require("express").Router();

const {
    createMovie,
    findMovie,
    findMovieId,
    modifyMovie
} = require("../controllers/movieController")

router
    .post("/", createMovie)
    .get("/", findMovie)
    .get("/:id", findMovieId)
    .put("/:id", modifyMovie)


module.exports = router;