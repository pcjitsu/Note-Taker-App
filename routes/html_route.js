const html_Router = require("express").Router();
const path = require("path");
//`GET *` should return the `index.html` file.

html_Router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// html_Router.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });
module.exports = html_Router;
