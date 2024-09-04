const mongoose = require("mongoose");

const crudSchema = mongoose.Schema({

    image : {
        type : String,
        required : true
    },

    foodName: {
        type: String,
        required: true
    },

    size: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    members: {
        type: Number,
        required: true
    },

    total: {
        type: Number,
        required: true
    },

});

const crudPr = mongoose.model("crudMulter", crudSchema);

module.exports = crudPr