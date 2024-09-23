const mongoose = require("mongoose");

const userSchema = mongoose.Schema ({
    
    name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }
});

const user = mongoose.model("dashboard", userSchema);

module.exports = user