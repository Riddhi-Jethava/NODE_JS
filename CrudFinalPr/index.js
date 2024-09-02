const express = require("express");
const port = 5000;

const app = express();

const db = require("./config/database");
const crud = require("./model/crudSchema");
const multer = require("multer");
const path = require('path')
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now())
    }
});

const uploads = multer({ storage: Storage }).single("image")
app.use(express.static(path.join(__dirname, "uploads")))
app.set("view engine", "ejs");
app.use(express.urlencoded());

app.get("/", async (req, res) => {
    let userData = await crud.find({})
    res.render("index", { userData });
});

app.post("/insertData", uploads, async (req, res) => {
    // console.log(req.body);
    req.body.image = req.file.filename
    let userData = await crud.create(req.body);
    userData ? res.redirect("back") : console.log("Data not added")
});

app.get("/deleteData", async (req, res) => {
    let deleteData = await crud.findByIdAndDelete(req.query.id);
    deleteData ? res.redirect("/") : console.log("Data is not deleted")
});

app.get("/editData", async (req, res) => {
    let edit = await crud.findById(req.query.id);
    edit ? res.render("editPage", { edit }) : console.log("Please try again, Data not found !")
});

app.post("/updateData", async (req, res) => {
    console.log(req.body)
    let update = await crud.findByIdAndUpdate(req.query.id, req.body);
    update ? res.redirect("/") : console.log("Data not updated");
});

app.listen(port, (err) => {
    err ? console.log("Error") : console.log(`Server start on port=${port}`);
});