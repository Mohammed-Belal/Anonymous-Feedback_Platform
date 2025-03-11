const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  room_id: { type: String, required: true },
  message: { type: String, required: true, maxlength: 500 },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
