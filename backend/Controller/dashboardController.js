const Room = require("../Models/Room.model");
const Feedback = require("../Models/feedback.model");
const fastCsv = require("fast-csv");
const { Readable } = require("stream");

// 🟢 Get Dashboard Data
const getDashboardData = async (req, res) => {
  try {
    const rooms = await Room.find({ createdBy: req.user.id });

    const dashboardData = await Promise.all(
      rooms.map(async (room) => {
        const feedbacks = await Feedback.find({ roomId: room._id });
        const sentimentCounts = { positive: 0, neutral: 0, negative: 0 };

        feedbacks.forEach((feedback) => {
          sentimentCounts[feedback.sentiment]++;
        });

        return {
          roomId: room._id,
          roomName: room.name,
          totalFeedbacks: feedbacks.length,
          sentimentCounts,
        };
      })
    );

    res.json({ dashboardData });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// 🛑 Delete Room
const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findOne({ _id: req.params.roomId, createdBy: req.user.id });

    if (!room) return res.status(404).json({ message: "Room not found" });

    await Feedback.deleteMany({ roomId: room._id });
    await room.remove();

    res.json({ message: "Room deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// 📤 Export Feedback as CSV
const exportFeedbackCSV = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ roomId: req.params.roomId });

    if (!feedbacks.length) return res.status(404).json({ message: "No feedback available" });

    const csvStream = fastCsv.format({ headers: true });
    const stream = new Readable();
    stream._read = () => {};
    feedbacks.forEach((feedback) => {
      stream.push({ message: feedback.message, sentiment: feedback.sentiment, timestamp: feedback.createdAt });
    });
    stream.push(null);

    res.setHeader("Content-Disposition", `attachment; filename=feedback_room_${req.params.roomId}.csv`);
    res.setHeader("Content-Type", "text/csv");

    stream.pipe(csvStream).pipe(res);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// 🟢 Get Dashboard Stats
const getDashboardStats = async (req, res) => {
  try {
    res.json({ message: "Dashboard stats fetched successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error fetching stats" });
  }
};

// ✅ Export all functions correctly
module.exports = {
  getDashboardData,
  deleteRoom,
  exportFeedbackCSV,
  getDashboardStats
};
