const { v4: uuidv4 } = require("uuid");
const Room = require("../Models/Room.model");


// Create a Room
exports.createRoom = async (req, res) => {
  try {
    const { room_name } = req.body;
    if (!room_name) return res.status(400).json({ message: "Room name required" });

    const newRoom = await Room.create({ room_name, created_by: req.user._id, room_id: uuidv4() });
    res.json({ message: "Room created", room_id: newRoom.room_id });
  } catch (err) {
    res.status(500).json({ message: "Error creating room", error: err.message });
  }
};

// Get Rooms Created by User
exports.getUserRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ created_by: req.user._id });
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: "Error fetching rooms", error: err.message });
  }
};
