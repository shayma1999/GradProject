const express = require("express");
const bodyParser = require("body-parser");

const App = express();

// parse requests of content-type: application/json
App.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
App.use(bodyParser.urlencoded({ extended: true }));

// simple route
App.get("/", (req, res) => {
  res.json({ message: "Welcome to oregano grad application." });
});


require("./routes/names.routes.js")(App);

// set port, listen for requests
App.listen(3000, () => {
  console.log("Server is running on port 3000.");
});