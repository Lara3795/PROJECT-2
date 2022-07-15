const router = require("express").Router();

const {
    createMovie,
    findMovie,
    findMovieId
} = require("../controllers/movieController")

router
    .post("/", createMovie)
    .get("/", findMovie)
    .get("/:id", findMovieId)


module.exports = router;