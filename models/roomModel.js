const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  room: {
    type: Number,
    require: true,
  },
  capacity: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    enum: ["vip", "standard"],
    default: "standard",
  },
});

const RoomModel = mongoose.model("room", roomSchema);
module.exports = RoomModel;
