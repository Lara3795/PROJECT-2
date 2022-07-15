const router = require("express").Router();

const {
  createRoom,
  findRoomList,
  findRoomNumber,
} = require("../controllers/roomController");

router.post("/", createRoom);
router.get("/", findRoomList);
router.get("/:id", findRoomNumber);

module.exports = router;
