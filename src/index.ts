import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();


const app = express();


app.use(express.json());


const PORT = process.env.PORT || 3000;


app.get('/health', (req: Request, res: Response) => {

    res.status(200).json({ status: 'Server is healthy' });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});