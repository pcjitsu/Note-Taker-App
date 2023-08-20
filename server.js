const express = require("express");

// Import the feedback router
const api = require("./routes/api");
const Html = require("./routes/html_route");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static("public"));

//Create Route that Sends Client to Index.html on start up or api
app.use("/api", api);
app.use("/", Html);

//Listen on Port 3001
app.listen(PORT, () => console.log(`Listening for requests on port ${PORT}! `));
