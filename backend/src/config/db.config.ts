/**
 * Establishes a connection to MongoDB using Mongoose.
 * Throws an error if the connection fails to prevent server startup.
*/

import { DB_NAME } from '../constants';
import { MONGODB_URL } from './env.config';

import mongoose from 'mongoose';

if(!MONGODB_URL){
    throw new Error ('MONGODB_URL is not defined in environment variables')
}

const connectDB = async () : Promise <void> => {
    try {
        await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`)
        console.log('MongoDB connected successfully');
    } catch (error) {
        if(error instanceof Error) {
            console.log('MongoDB Connection Error', error.message);
        }else{
            console.log('Unknown MongoDB connection error:', error);
        }
        throw error;
    }
}

export default connectDB;
