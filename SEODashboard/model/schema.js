const mongoose = require("mongoose");

const schema = mongoose.Schema({

    name: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: Number
    }
});

const userSchema = mongoose.model("dashSchema", schema);

module.exports = userSchema