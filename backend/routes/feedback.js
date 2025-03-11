const express = require("express");
const { submitFeedback, getRoomFeedback } = require("../Controller/feed.controller");

const router = express.Router();

router.post("/submit", submitFeedback);
router.get("/:room_id", getRoomFeedback);

module.exports = router;
