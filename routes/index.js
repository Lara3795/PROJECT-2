const router = require("express").Router();

const { checkAuthEmployee } = require("../utils");

const userRouter = require("./userRouter");
const employeeRouter = require("./employeeRouter");
const purchaseRouter = require("./purchaseRouter");
const screeningRouter = require("./screeningRouter");

router.use("/user", userRouter);
router.use("/employee", employeeRouter);
router.use("/purchase", purchaseRouter);
router.use("/screening", screeningRouter);

module.exports = router;
