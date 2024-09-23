const user = require("../model/dashSchema")

module.exports.login = (req,res) => {
    res.render("login")
}

module.exports.userLogin = (req,res) => {
    res.redirect("homepage")
}

module.exports.homePage = async (req, res) => {
    let data = await user.find({})
    res.render("homePage", { data })
};

module.exports.form = (req, res) => {
    res.render("form")
}

module.exports.insertData = async (req, res) => {
    console.log(req.body)
    let data = await user.create(req.body)
    res.redirect("/homePage")
}

module.exports.deleteData = async (req, res) => {
    let deleteData = await user.findByIdAndDelete(req.query.id, req.body)
    deleteData ? res.redirect("/homePage") : console.log("Data not deleted")
}

module.exports.editData = async (req, res) => {
    let editData = await user.findById(req.query.id)
    editData ? res.render("editData", { editData }) : console.log("Data not found")
}

module.exports.updateData = async (req,res) => {
    let update = await user.findByIdAndUpdate(req.query.id, req.body)
    update ? res.redirect("/homePage") : console.log("Data not updated")
}