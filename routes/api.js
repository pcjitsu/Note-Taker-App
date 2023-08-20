const app = require("express").Router();
const fs = require("fs");
const path = require("path");

// Get Information From db.json
app.get("/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
    if (err) {
      res.status(500).json({ error: err.message });
    }
    res.json(JSON.parse(data));
  });
});

// Save a new note to db.json
app.post("/notes", (req, res) => {
  const newNote = req.body;
  fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      const notes = JSON.parse(data);
      newNote.id = notes.length + 1; // Assign a unique ID
      notes.push(newNote);
      fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          res.json(newNote);
        }
      });
    }
  });
});

// Delete a note by ID
app.delete("/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      let notes = JSON.parse(data);
      notes = notes.filter((note) => note.id !== noteId);
      fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          res.json({ message: "Note deleted successfully" });
        }
      });
    }
  });
});

// Export Module
module.exports = app;
