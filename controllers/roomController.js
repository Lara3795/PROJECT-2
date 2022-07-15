const RoomModel = require("../models/roomModel");

async function createRoom(req, res) {
  try {
    const room = await RoomModel.create(req.body);
    res.json(room);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createRoom,
};
