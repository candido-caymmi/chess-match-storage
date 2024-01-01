import express from 'express';
import { getDB } from '../../db.js';
const router = express.Router();

// Get Matches
router.get('/', async (req, res) => {
    const matches = await loadMatchesCollection();
    res.send(await matches.find({}).toArray);
});

async function loadMatchesCollection() {
    return getDB().collection('matches');
}

export default router;