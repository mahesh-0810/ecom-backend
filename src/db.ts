// 1. Import mongoose, the library used to interact with MongoDB
import mongoose from 'mongoose';

// 2. Create an asynchronous function to handle the connection
const connectDB = async () => {
    try {
        // 3. Ensure the MONGODB_URI exists in the environment variables
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error("MONGODB_URI is missing in the .env file");
        }

        // 4. Attempt to connect to the database
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected Successfully');

    } catch (error) {
        // 5. If it fails (e.g., bad password, network issue), log the error and crash the server safely
        console.error('MongoDB connection failed:', error);
        process.exit(1); 
    }
};

// 6. Export the function so we can use it in index.ts
export default connectDB;