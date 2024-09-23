const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dashboard");

const db = mongoose.connection

db.once("open", (err) => {
    console.log(err ? "error occured" : "Database connected..")
})