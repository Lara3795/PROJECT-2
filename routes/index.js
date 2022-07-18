const router = require("express").Router();

const { checkAuthEmployee } = require("../utils");

const userRouter = require("./userRouter");
const roomRouter = require("./roomRouter");
const employeeRouter = require("./employeeRouter");
const movieRouter = require("./movieRouter");
const purchaseRouter = require("./purchaseRouter");
const screeningRouter = require("./screeningRouter");

router.use("/user", userRouter);
router.use("/room", roomRouter);
router.use("/movie", checkAuthEmployee,  movieRouter);
router.use("/employee", employeeRouter);
router.use("/purchase", purchaseRouter);
router.use("/screening", screeningRouter);

module.exports = router;
