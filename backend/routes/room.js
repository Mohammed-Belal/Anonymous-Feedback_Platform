const express = require("express");
const { createRoom, getUserRooms } = require("../Controller/room.controller");
const authMiddleware = require("../Middleware/auth.middleware");

const router = express.Router();

router.post("/create", authMiddleware.authUser, createRoom);
router.get("/my-rooms", authMiddleware.authUser, getUserRooms);

module.exports = router;
