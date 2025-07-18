import express from 'express';
import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';
import cors from 'cors';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n✅ MongoDB connected! DB HOST: ${connectionInstance.connection.host}, DB NAME: ${connectionInstance.connection.name}`);
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
