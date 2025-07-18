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

// Initialize app
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Replace with frontend URL
  credentials: true,
}));
app.use(express.json()); // To parse JSON bodies

// Connect DB
connectDB();

// Routes
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
