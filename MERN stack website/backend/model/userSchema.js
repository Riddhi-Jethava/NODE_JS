const mongoose = require("mongoose");

const schema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    country: {
        typr: String
    },
    // bDate: {
    //     type: Number
    // },
    email: {
        type: String
    },
    password: {
        type: String
    },
    product : {
        type: String
    },
    discription : {
        type: String
    },
    Price: {
        type: String
    }

});

const userSchema = mongoose.model("person", schema);

module.exports = userSchema