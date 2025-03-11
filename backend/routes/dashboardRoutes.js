const express = require("express");
const {
  getDashboardData,
  deleteRoom,
  exportFeedbackCSV,
  getDashboardStats
} = require("../controller/dashboardController"); // Ensure correct path

const authMiddleware = require("../Middleware/auth.middleware");

const router = express.Router();

router.get("/dashboard", authMiddleware, getDashboardData);
router.delete("/room/:roomId", authMiddleware, deleteRoom);
router.get("/export/:roomId", authMiddleware, exportFeedbackCSV);
router.get("/stats", authMiddleware, getDashboardStats); // ✅ Ensure function is passed

module.exports = router;
