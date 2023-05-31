const express = require("express");
const portfolio = express();
const mongoose = require('mongoose');
const Contact = require("./models/Contact");
require('dotenv').config()

const port = 5000;
bodyParser = require('body-parser');

// support parsing of application/json type post data
portfolio.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
portfolio.use(bodyParser.urlencoded({ extended: true }));

//setting folder for static assets
portfolio.use(express.static("Public"));

//setting view engine
portfolio.set("view engine", "ejs");

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to MongoDB");
    }).catch((e) => {
        console.log("Oh No ERROR!");
        console.log(e);
    })
}

portfolio.use('/contact', require('./routes/contacts'));

//home page
portfolio.get("/", (req, res) => {
  res.render("home");
});

//personalities page
portfolio.get("/personalities", (req, res) => {
  res.render("personalities");
});

//cities page
portfolio.get("/cities", (req, res) => {
  res.render("cities");
});

//tourist page
portfolio.get("/tourist", (req, res) => {
  res.render("tourist");
});

// Listening on port 5000
portfolio.listen(port, () => {
  connectDatabase();
  console.log(`SERVER LISTENING AT PORT ${port}`);
});
