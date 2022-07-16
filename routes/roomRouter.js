const router = require("express").Router();

const {
  createRoom,
  findRoomList,
  findRoomNumber,
  findRoomAndUpdate,
  findByIdAndDelete,
} = require("../controllers/roomController");

router.post("/", createRoom);
router.get("/", findRoomList);
router.get("/:id", findRoomNumber);
router.put("/:id", findRoomAndUpdate);
router.delete("/:id", findByIdAndDelete);
module.exports = router;
