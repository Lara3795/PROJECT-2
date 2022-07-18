const router = require("express").Router();

const { checkRol, checkAuth } = require('../utils')

const {
    findScreening,
    findScreeningId,
    modifyScreening,
    createScreening,
    deleteScreening
} = require("../controllers/screeningController")

router
    .get("/", findScreening)
    .get("/:id", findScreeningId)
    .put("/:id", checkAuth, checkRol, modifyScreening)
    .post("/", checkAuth, checkRol, createScreening)
    .delete("/:id", checkAuth, checkRol, deleteScreening)


module.exports = router;