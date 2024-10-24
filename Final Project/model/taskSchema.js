const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
});

const task = mongoose.model("task", schema);

module.exports = task