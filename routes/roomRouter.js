const router = require("express").Router();

const { createRoom, findRoom } = require("../controllers/roomController");

router.post("/", createRoom);
router.get("/", findRoom);

module.exports = router;
