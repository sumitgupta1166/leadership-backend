import express from "express";
import dotenv from "dotenv"
import userRoutes from "./routes/user.routes.js";
dotenv.config({
    path: './env'
})
import connectDB from './db/index.js';
const app = express();
connectDB();

app.use('/api/users', userRoutes);
