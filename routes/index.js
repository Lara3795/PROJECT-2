const router = require("express").Router();

const { checkAuth } = require('../utils')

const userRouter = require("./userRouter");
const roomRouter = require("./roomRouter");
const employeeRouter = require("./employeeRouter");
const movieRouter = require("./movieRouter");
const screeningRouter = require("./screeningRouter");

router.use("/user", userRouter);
router.use("/room", roomRouter);
router.use("/movie", movieRouter);
router.use("/employee", checkAuth, employeeRouter);
router.use("/screening", screeningRouter);

module.exports = router;
