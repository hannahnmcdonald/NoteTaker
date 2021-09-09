// Requirements
const fs = require("fs");
const path = require("path");

// Function to create note
function createNote(body, notesArray) {
  // Pushes note to the notes array
    const note = body;
    notesArray.push(note);
    // New Notes Array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
    // Returns created note
    return note;
}

// Function to delete note
function deleteNote(notesArray, id) {
    let deleteID = parseInt(id);
    // Splices notes array
    notesArray.splice(deleteID, 1);
    // This loop re-writes the i for the other notes that remain
    for (let i = deleteID; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }
    // New Notes Array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
}
// Exports createNote and deleteNote
module.exports = {
    createNote,
    deleteNote
};