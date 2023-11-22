const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fileName = require('../db/db.json')

// GET route for fetching notes
router.get('/notes', (req, res) => {
    const data = fs.readFileSync('db/db.json', 'utf8');
    const parsedData = JSON.parse(data);
    res.json(parsedData);
});

// POST route for saving notes
router.post('/notes', (req, res) => {
    // fileName.push(req.body);
    const { title, text  } = req.body;
    const payload = {
        title,
        text,
        id: uuidv4()
    };
    console.log(payload);
    const newData = [...fileName, payload];
    const data = fs.writeFileSync('db/db.json', JSON.stringify(newData), (err) => console.log(err));
    res.json(data);
});

module.exports = router;