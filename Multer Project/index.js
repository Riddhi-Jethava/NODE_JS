const express = require("express");

const port = 3000;

const app = express();

const db = require("./config/database");
const crud = require("./model/crudSchema");
const multer = require("multer");
const path = require('path');
const fs = require("fs")
const { fstat } = require("fs");
const { log } = require("console");
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
    // let data = await crud.find({});
    res.render("index");
});

app.post("/insertData", uploads, async (req, res) => {
    // console.log(req.body)
    req.body.image = req.file.filename
    let data = await crud.create(req.body)
    let confData = await crud.find({});
    data ? res.render("confirmOrders", { data: confData }) : console.log("Data not added")
});

app.get("/deleteData", async (req, res) => {
    let deleteData = await crud.findByIdAndDelete(req.query.id);
    deleteData ? res.redirect("back") : console.log("Data is not deleted")
});

app.get("/editData", async (req, res) => {
    let edit = await crud.findById(req.query.id);
    edit ? res.render("editPage", { edit }) : console.log("Please try again, Data not found !")
});


app.post("/updateData", uploads, async (req, res) => {
    let img = ""
    let data = await crud.findById(req.query.id);
    if (req.file) {
        img = req.file.filename; // Corrected to use just the filename
        if (data.image) {
            fs.unlinkSync(path.join(__dirname, "uploads", data.image)); // Delete the old image file
        }
    } else {
        img = data.image;
    }

    req.body.image = img;
    let update = await crud.findByIdAndUpdate(req.query.id, req.body);
    update ? res.redirect("/myOrders") : console.log("Data not updated");
});
app.get("/myOrders", async (req, res) => {
    let data = await crud.find({});
    res.render("confirmOrders", { data })
})

app.listen(port, (err) => {
    err ? console.log("Error occured") : console.log(`Server start on port=${port}`)
});