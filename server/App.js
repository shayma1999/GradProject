const express = require("express");
const bodyParser = require("body-parser");
const mysql = require('mysql');

//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gradproject'
});
//connect to database
conn.connect((err) => {
  if (err) throw err;
  console.log('Mysql Connected...');
});


const App = express();
App.use(bodyParser.json({ type: '/' }));
// parse requests of content-type: application/json
App.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
App.use(bodyParser.urlencoded({ extended: true }));

// simple route
App.get("/", (req, res) => {
  res.json({ message: "Welcome to oregano grad application." });
});

App.get(/search\/(?:([^\/]+?))\/?$/i, function (req, res) {
  var search = req.params[0]
  var sql = "SELECT * from finalfinal WHERE list_timeA LIKE '%"+search+"%'"
  conn.query(sql, function (err, result) {
    if (err) res.send(err)
    res.send(result)
  })
})

require("./routes/names.routes.js")(App);

// set port, listen for requests
App.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
