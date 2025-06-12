import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

// Load .env variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express app ✅
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes (AFTER app is declared) ✅
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("VIT ClubHub API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
