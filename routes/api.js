const app = require("express").Router();
const fs = require("fs");
const path = require("path");
//fs is incorrect and use path extensio
app.get("/api", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
    if (err) {
      res.status(500).json({ error: err.message });
    }
    res.json(JSON.parse(data));
  });
});

//JSON.parse(data
module.exports = app;

// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file,
// and then return the new note to the client.
// You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
