const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
require("dotenv").config();
require("./config/database");

// Always require and configure near the top
require("dotenv").config();
// Connect to the database
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// middleware 2 check + verify a JWT & assign the user obj from the JW -
// 2 req.user
app.use(require("./config/checkToken"));
const port = process.env.PORT || 3001;

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));
app.use("/api/sessions", require("./routes/api/sessions"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
