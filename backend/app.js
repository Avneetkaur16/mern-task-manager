import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';
import { URL } from 'url';
import path from 'path';

dotenv.config();

const app = express();
const __dirname = decodeURI(new URL('.', import.meta.url).pathname);

app.use(express.json());
app.use(cors());

// Routes
app.use('/api', taskRoutes);

// DB Connection function
const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database Connected');
    } catch(error) {
        throw error;
    }
}

// Static Files
/* app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
}); */

app.listen(process.env.PORT, (err) => {
    connect();
    if (err) console.log(err);
    console.log(`Server running on port ${process.env.PORT}`)
});
