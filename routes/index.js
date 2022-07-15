const router = require("express").Router();

const userRouter = require("./userRouter");
const employeeRouter = require("./employeeRouter");


router.use("/user", userRouter);
router.use("/employee", employeeRouter);

module.exports = router;
