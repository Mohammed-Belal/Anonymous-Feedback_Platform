const Feedback = require("../Models/feedback.model");

// Submit Anonymous Feedback
exports.submitFeedback = async (req, res) => {
  try {
    const { room_id, message } = req.body;
    if (!room_id || !message) return res.status(400).json({ message: "Missing fields" });

    await Feedback.create({ room_id, message });
    res.json({ success: true, message: "Feedback submitted" });
  } catch (err) {
    res.status(500).json({ message: "Error submitting feedback", error: err.message });
  }
};

// Get Feedback for a Room
exports.getRoomFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ room_id: req.params.room_id }).sort({ timestamp: -1 });
    res.json({ feedbacks });
  } catch (err) {
    res.status(500).json({ message: "Error fetching feedback", error: err.message });
  }
};
