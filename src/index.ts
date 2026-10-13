// 1. Import the Express library and TypeScript types for requests/responses
import express, { Request, Response } from 'express';
// 2. Import dotenv to read hidden variables
import dotenv from 'dotenv';

// 3. Load environment variables from a .env file into the system's process.env
dotenv.config();

// 4. Initialize the Express application
const app = express();

// 5. Add Middleware: This intercepts incoming requests and converts raw JSON data into a usable JavaScript object attached to `req.body`
app.use(express.json());

// 6. Define the port. Use the one in the environment variables, or default to 3000
const PORT = process.env.PORT || 3000;

// 7. Create a 'Health Check' route. 
// Interview tip: Always add a health check so load balancers (like AWS ALB) can verify your API is alive.
app.get('/health', (req: Request, res: Response) => {
    // Send an HTTP 200 (Success) status code and a JSON message
    res.status(200).json({ status: 'Server is healthy' });
});

// 8. Tell the server to start listening for incoming traffic on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});