const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const { API_VERSION } = require("./config.js");


//Load routings
// ....


app.use( bodyparser.urlencoded({ extended: false }) );
app.use( bodyparser.json() );

//configure Header HTTP
// ....



//Router Basic
// ....


module.exports = app;