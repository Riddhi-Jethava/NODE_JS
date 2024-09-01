const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/multerPr");

const db = mongoose.connection

db.once("open", (err) => {
    err ? console.log("Error") : console.log("Database connect successfully !")
})

module.exports = db