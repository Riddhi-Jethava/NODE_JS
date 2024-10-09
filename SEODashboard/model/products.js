const mongoose = require('mongoose')

const schema = mongoose.Schema({
    productName : {
        type: String,
        // required: true
    },
    price : {
        type: Number,
        // required: true
    },
    star : {
        type : Number,
        // required: true
    },
    rate : {
        type: Number,
        // required: true
    },
    discount : {
        type : Number,
        // required: true
    },
    productImage : {
        type: String,
        // required: true
    },
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    subcategoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Sub-Category"
    }
})

const productsSchema = mongoose.model('Products', schema)

module.exports = productsSchema