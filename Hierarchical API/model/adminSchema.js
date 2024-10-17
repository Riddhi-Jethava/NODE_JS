const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    hobby: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    }
})

const admin = mongoose.model("Admin", adminSchema)

module.exports = admin