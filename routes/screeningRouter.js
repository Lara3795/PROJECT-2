const router = require("express").Router();

const { checkRol, checkAuth, checkAuthEmployee } = require('../utils')

const {
    findScreening,
    getAllScreenings,
    findScreeningId,
    modifyScreening,
    createScreening,
    deleteScreening
} = require("../controllers/screeningController")

router
    .get("/", checkAuth, findScreening)
    .get("/all", checkAuthEmployee, getAllScreenings)
    .get("/:id", findScreeningId)
    .put("/:id", checkAuthEmployee, checkRol, modifyScreening)
    .post("/", checkAuthEmployee, checkRol, createScreening)
    .delete("/:id", checkAuthEmployee, checkRol, deleteScreening)


module.exports = router;