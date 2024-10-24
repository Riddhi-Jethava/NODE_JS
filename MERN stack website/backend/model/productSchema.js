const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    }
});

const productSchema = mongoose.model("product", schema);

module.exports = productSchema