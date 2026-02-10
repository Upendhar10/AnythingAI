import dotenv from 'dotenv';
dotenv.config();

import {PORT} from "./config/env.config";

import app from './app';
import connectDB from './config/db.config';

// Start server only after successful DB connection
const StartServer = async () : Promise <void> => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    } catch (error) {
        console.error('DB Connection Failed. Server not started.');
        process.exit(1);
    }
}

StartServer();