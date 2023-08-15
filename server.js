const express = require("express");
const path = require("path");

// Import the feedback router
const api = require("./routes/index");

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static("public"));

//Create Route that Sends Client to Index.html on start up

//Listen on Port 3001
app.listen(PORT, () => console.log(`Listening for requests on port ${PORT}! `));
