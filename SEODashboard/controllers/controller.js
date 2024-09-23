const schema = require("../model/schema");

module.exports.loginPage = (req, res) => {
    res.render("loginPage")
}

module.exports.userLogin = async (req, res) => {
    // res.render("homePage")
    // const user = await schema.findOne({ email: req.body.email });
    // if (!user) {
    //   return res.redirect("/");
    // }
    // user.password == req.body.password
    //   ? res.redirect("/")
    //   : res.redirect("back");
    // res.redirect('/')
}

module.exports.homePage = async (req, res) => {
    res.render("homePage")
}

module.exports.form = async (req, res) => {
    res.render("form")
}

module.exports.insertData = async (req, res) => {
    console.log(req.body)
    let data = await schema.create(req.body)
    data ? res.redirect("/adminData") : console.log("Data not added")
}

module.exports.adminData = async (req, res) => {
    let data = await schema.find({})
    // console.log(data)
    data ? res.render("adminData", { data }) : console.log("data not founded")
}

module.exports.deleteData = async (req, res) => {
    let deleteData = await schema.findByIdAndDelete(req.query.id)
    deleteData ? res.redirect("/adminData") : console.log("Data is not deleted")
}

module.exports.editData = async (req, res) => {
    let edit = await schema.findById(req.query.id);
    edit ? res.render("editData", { edit }) : console.log("Data is not edit yet !")
}

module.exports.updateData = async (req, res) => {
    let update = await schema.findByIdAndUpdate(req.query.id, req.body)
    update ? res.redirect("/adminData") : console.log("Data not updated");
}