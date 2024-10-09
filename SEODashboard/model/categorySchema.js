const mongoose = require("mongoose");

const catSchema = mongoose.Schema({
    name: {
        type: String,
    },
    
    categoryImage: {
        type: String,
    }
})

const subCategory = mongoose.model("Category", catSchema);

module.exports = subCategory