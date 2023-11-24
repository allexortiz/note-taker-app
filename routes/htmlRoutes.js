const router = require('express').Router();
const path = require('path');

// GET route for the homepage
router.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET route for the notes page
router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = router;