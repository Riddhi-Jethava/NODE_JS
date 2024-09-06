const schema = require('../model/movieSchema')
const db = require('../config/database')

module.exports.homePage = async (req, res) => {
    const data = await schema.find({});
    res.render('homePage', { data });
}

module.exports.form = (req, res) => {
    res.render('form')
}

module.exports.insertData = async (req, res) => {
    const data = await schema.create(req.body)
    data ? res.redirect('/') : console.log('Data Not Inserted')
}

module.exports.deleteData = async (req,res) => {
    const deleteData = await schema.findByIdAndDelete(req.query.id);
    deleteData ? res.redirect('/') : console.log("Data is not deleted")
}

module.exports.editData = async (req,res) => {
    const edit = await schema.findById(req.query.id);
    edit ? res.render("editPage", { edit }) : console.log("Please try again, Data not found !")
}

module.exports.updateData = async (req,res) => {
    const update = await schema.findByIdAndUpdate(req.query.id, req.body);
    update ? res.redirect("/") : console.log("Data not updated");
}