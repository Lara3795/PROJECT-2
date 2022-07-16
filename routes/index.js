const router = require("express").Router();

const userRouter = require("./userRouter");
const roomRouter = require("./roomRouter");

router.use("/user", userRouter);
router.use("/room", roomRouter);
const movieRouter = require("./movieRouter");

router.use("/user", userRouter);
router.use("/movie", movieRouter);
const employeeRouter = require("./employeeRouter");

router.use("/user", userRouter);
router.use("/employee", employeeRouter);

module.exports = router;
