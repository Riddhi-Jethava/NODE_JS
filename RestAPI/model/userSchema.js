const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
        unique : true,
    }
})

const userSchema = mongoose.model("restAPI", schema)

module.exports = userSchema;