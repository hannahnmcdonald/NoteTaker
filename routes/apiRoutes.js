// Requirements
const router = require('express').Router();
const { notes } = require('../db/db.json');
const { createNote, deleteNote } = require('../db/savedNotes.js');

 // GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

// POST will "post" the notes to the server
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNote(req.body, notes);
    res.json(note);
})

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})

// Exporting
module.exports = router;