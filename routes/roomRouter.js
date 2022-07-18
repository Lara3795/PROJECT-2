const router = require("express").Router();

const { checkRol, checkAuth } = require('../utils')

const {
  createRoom,
  findRoomList,
  findRoomNumber,
  findRoomAndUpdate,
  findByIdAndDelete,
} = require("../controllers/roomController");

router.post("/", checkAuth, checkRol, createRoom);
router.get("/", checkAuth, findRoomList);
router.get("/:id", checkAuth, findRoomNumber);
router.put("/:id", checkAuth, checkRol, findRoomAndUpdate);
router.delete("/:id", checkAuth, checkRol, findByIdAndDelete);

module.exports = router;
