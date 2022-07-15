const RoomModel = require("../models/roomModel");

async function createRoom(req, res) {
  try {
    const room = await RoomModel.create(req.body);
    res.json(room);
  } catch (error) {
    console.log(error);
  }
}
async function findRoomList(req, res) {
  try {
    const room = await RoomModel.find(req.body);
    res.json(room);
  } catch (error) {
    console.log(error);
  }
}

async function findRoomNumber(req, res) {
  try {
    const room = await RoomModel.findById(req.params.id).populate("room");
    res.json(room);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createRoom,
  findRoomList,
  findRoomNumber,
};
