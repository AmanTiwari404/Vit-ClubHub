import express from "express";
import { createEvent, getClubEvents } from "../controllers/eventController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Only authenticated admins can create and see events
router.post("/", protect, createEvent);
router.get("/", protect, getClubEvents);

export default router;
