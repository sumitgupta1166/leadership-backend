// src/server.js
import express from "express";
import dotenv from "dotenv";
import connectDB from './db/index.js';
import userRoutes from "./routes/user.routes.js";
import cors from "cors";

// Load env vars
dotenv.config({
  path: './env'
});

// Connect DB
connectDB();

// Initialize app
const app = express();

// CORS Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://leadership-3w.netlify.app'], // ✅ No slash
  credentials: true,
}));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// ✅ Add default root route (Fix 404 on Vercel root)
app.get("/", (req, res) => {
  res.send("✅ Leadership backend running successfully!");
});

// Start server (only if not in Vercel serverless)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
