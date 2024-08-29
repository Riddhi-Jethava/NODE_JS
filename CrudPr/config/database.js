const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Cruds"); 

const db = mongoose.connection 

db.once("open", (err) => {
    err ? console.error(err) : console.log('database connection Successfully');
});

module.exports = db;



