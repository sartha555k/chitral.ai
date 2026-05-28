import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import messageRoutes from "./routes/messageRoutes.js";
import analyzerRoutes from "./routes/analyzerRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";


connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
  });
});

app.use("/api/message", messageRoutes);
app.use("/api/analyzer", analyzerRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on("error", (err) => {
  console.error("Server Error:", err);
});