const path = require('path');
const fs = require('fs');
const router = require('express').Router();

// Get route for notes page
router.get('notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Get route for home page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../pub;ic/index.html'));
});

module.exports = router;