const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const fileName = './db/db.json'

// GET route for fetching notes
router.get('/notes', (req, res) => {
    const data = fs.readFileSync(fileName, 'utf8');
    const parsedData = JSON.parse(data);
    res.json(parsedData);
});

// POST route for saving notes
router.post('/notes', (req, res) => {
    res.json('success');
});

module.exports = router;