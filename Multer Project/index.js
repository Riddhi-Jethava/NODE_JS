const express = require("express");

const port = 3000;
const db = require("./config/database");
const crud = require("./model/crudSchema");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.get("/", async (req, res) => {
    let data = await crud.find({});
    res.render("index", { data });
});

app.post("/inserData", async (req, res) => {
    console.log(req.body)
    let data = await crud.creat(req.body)
    data ? res.redirect("back") : console.log("Data not added")
});

app.listen(port, (err) => {
    err ? console.log("Error occured") : console.log(`Server start on port=${port}`)
});