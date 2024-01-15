import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from './db.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();

// Middleware
app.use('/static', express.static(path.join(dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

// DB Connection
connectDB();

//Routes
import matches from './routes/api/matches.js';

app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, 'public', 'index.html'));
});

app.use('/matches', matches);

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});