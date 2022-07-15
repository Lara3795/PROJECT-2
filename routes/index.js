const router = require("express").Router();
const userRouter = require("./userRouter");
const roomRouter = require("./roomRouter");

router.use("/user", userRouter);
router.use("/room", roomRouter);

module.exports = router;
