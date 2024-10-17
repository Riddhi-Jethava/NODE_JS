const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
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
});

const employeeRegstr = mongoose.model("employeeRegister", employeeSchema);

module.exports = employeeRegstr