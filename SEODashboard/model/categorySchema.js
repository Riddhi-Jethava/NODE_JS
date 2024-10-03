const mongoose = require("mongoose");

const catSchema = mongoose.Schema({

})

const subCategory = mongoose.model("sub-category", catSchema);

module.exports = subCategory