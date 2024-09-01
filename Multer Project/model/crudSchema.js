const mongoose = require("mongoose");

const crudSchema = mongoose.Schema({

    foodName: {
        type: String,
        required: true
    },

    cost: {
        type: Number,
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