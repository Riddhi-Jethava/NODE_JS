const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
    },
    
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }
})

const subCategory = mongoose.model("Sub-Category", schema);

module.exports = subCategory