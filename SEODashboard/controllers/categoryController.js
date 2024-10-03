const categorySchema = require("../model/categorySchema")

module.exports.addCategory = (req, res) => {
    res.render("category/addCategory")
}