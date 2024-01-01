import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from './db.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// DB Connection
connectDB();

// Routes
import matches from './routes/api/matches.js';

app.get('/', (req, res) => {
    res.send('Node.js server with Express running!');
});

app.use('/matches', matches);

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});