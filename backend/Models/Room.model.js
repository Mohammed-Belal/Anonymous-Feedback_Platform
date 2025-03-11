const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  room_name: { type: String, required: true },
  room_id: { type: String, unique: true, required: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Room", RoomSchema);
