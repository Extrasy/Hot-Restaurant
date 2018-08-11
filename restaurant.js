// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/******************************************************* */

// Data
const limit = 1;
let tables = [];

// var tables = [
//     {
//         name: "";
//         phone: "";
//         email: "",
//         id: "",
//         role: ""
//     },
//   ];


// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "index.html"));
    res.send("Restaurant!");
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/tables/view", function (req, res) {
    //Send Obj
    return res.json(tables);
});

// Create New Characters - takes in JSON input
app.post("/reserve", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    let table = req.body;
    tables.length < limit ? table.role = "table" : table.role = "waiting";
    tables.push(table);
    return res.json(tables);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
