const router = require("express").Router();

const userRouter = require("./userRouter");
const roomRouter = require("./roomRouter");
const movieRouter = require("./movieRouter");
const employeeRouter = require("./employeeRouter");

router.use("/room", roomRouter);
router.use("/user", userRouter);
router.use("/movie", movieRouter);
router.use("/employee", employeeRouter);

module.exports = router;
