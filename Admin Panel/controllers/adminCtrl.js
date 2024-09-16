const adminCrud = require("../model/adminSchema");

module.exports.login = (req, res) => {
    res.render("login")
}

module.exports.loginUser = async (req, res) => {
    let user = await adminCrud.findOne({ email: req.body.email });
    console.log(user)
    console.log(req.body.email)
    if (user) {
        if (user.password == req.body.password) {
            res.cookie("admin", user)
            res.redirect("/dashboard")
        } else {
            res.redirect('back')
        }
    } else {
        console.log("user not found");
        res.redirect("/");
    }
}

module.exports.dashboard = async (req, res) => {
    if (req.cookies.admin === undefined) {
        return res.redirect("/")
    } else {
        res.render("index")
    }
}

module.exports.form = async (req, res) => {
    res.render("form");
}

module.exports.insertData = async (req, res) => {
    const data = await adminCrud.create(req.body);
    data ? res.redirect('/') : console.log('Data Not Inserted');
}

module.exports.viewDetails = async (req, res) => {
    let data = await adminCrud.find({})
    res.render("viewDetails", { data });
}

module.exports.deleteData = async (req, res) => {
    let deleteData = await adminCrud.findByIdAndDelete(req.query.id);
    deleteData ? res.redirect("back") : console.log("Data is not deleted");
}

module.exports.editData = async (req, res) => {
    let edit = await adminCrud.findById(req.query.id);
    edit ? res.render("editPage", { edit }) : console.log("Data is not edit yet !")
}

module.exports.updateData = async (req, res) => {
    // console.log(req.body)
    let update = await adminCrud.findByIdAndUpdate(req.query.id, req.body)
    update ? res.redirect("/viewData") : console.log("data not updated")
}