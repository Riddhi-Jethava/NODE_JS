const express = require("express");

const port = 5000;

const app = express();
const path = require("path")
const cookie = require('cookie-parser')

const db = require("./config/database");

app.set("view engine", "ejs");
app.use(cookie())
app.use(express.urlencoded({ extended: true }));
// app.use('/public', express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes"));

app.listen(port, (err) => {
    err ? console.log("Error") : console.log(`Server successfully start on port = ${port}`)
});