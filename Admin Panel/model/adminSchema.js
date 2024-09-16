const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    fname: {
        type: String,
        required: false
    },
    lname: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: false
    },
    image : {
        type : String,
    }
});

const adminCrud = mongoose.model("adminCrud", adminSchema);

module.exports = adminCrud