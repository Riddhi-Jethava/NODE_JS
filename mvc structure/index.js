const express = require("express");
const port = 5000;

const app = express();
const db = require("./config/database")
const path = require("path")

app.set("view engine", "ejs")

app.use(express(express.urlencoded({ extended: true })));

app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/style', express.static(path.join(__dirname, 'style')));

app.use("/", require('./routes'));

app.listen(port, (err) => {
    err ? console.log("Error occured") : console.log(`Server start on port =${port}`)
});

