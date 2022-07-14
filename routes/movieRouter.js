const router = require("express").Router();

const { 
    createMovie 
} = require("../controllers/movieController");

router
.post("/", createMovie)

module.exports = router;