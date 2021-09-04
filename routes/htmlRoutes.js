const path = require('path');
const fs = require('fs');
const router = require('express').Router();

router.get('notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;