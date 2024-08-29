const express = require("express"); //1

const port = 5000; //2

const app = express(); //3

const db = require("./config/database");

const crud = require("./model/crud");

app.use(express.urlencoded());

app.set("view engine", "ejs"); //5

app.get("/", async (req,res) => { //6
    //res.render("index")
    //render means show 
    let data = await crud.find({})
    data ? res.render("index", {data}) : console.log("data added successfully")
    //if you want to pass data through render, so you must be pass object (empty array are not allow)
});

app.post("/insert", async (req,res) => {
    console.log(req.body);
    let data = await crud.create(req.body)
    data ? res.redirect("back") : console.log("data not added")
});

app.get("/deleteData", async (req,res) => {
    let deleteData = await crud.findByIdAndDelete(req.query.id);
    deleteData ? res.redirect("back") : console.log("unsuccessfull")
});

app.get("/editData", async (req,res) => {
   let edit = await crud.findById(req.query.id);
   edit ? res.render("editData", { edit }) : console.log("data not found")
});

app.post("/updateData", async (req,res) => {
    console.log(req.body)
    let update = await crud.findByIdAndUpdate(req.query.id, req.body);
    update ? res.redirect("/") : console.log("Data not updated");
})

app.listen(port, (err) => { //4
    err ? console.log("Error occured") : console.log(`server start on port=${port}`);
});