import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/leaderboard');

app.use('/api/users', userRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));