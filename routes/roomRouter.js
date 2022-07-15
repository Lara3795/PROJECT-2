const router = require("express").Router();

const {
  createRoom,
  findRoomList,
  findRoomNumber,
  findRoomAndUpdate,
} = require("../controllers/roomController");

router.post("/", createRoom);
router.get("/", findRoomList);
router.get("/:id", findRoomNumber);
router.put("/:id", findRoomAndUpdate);
module.exports = router;
