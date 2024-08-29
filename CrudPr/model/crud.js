const mongoose = require("mongoose");

const userSchema = mongoose.Schema ({
    name: {
        type : String,
        required : true
    },

    post: {
        type: String,
        required : true
    }
})

const crud = mongoose.model('crud', userSchema)

module.exports = crud
