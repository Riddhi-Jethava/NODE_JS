const express = require("express");

const db = require("./config/db");
const userModel = require("./model/userModel");

const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded());

app.post("/create", async(req,res) => {
    const data = await userModel.create(req.body);

    return res.send(data);
});

app.get("/", (req,res) => {
    userModel.find({}).then((data) => {
        console.log(data)
        res.render("index", {
            student: data
        })
    }) .catch((err) => {
        console.log(err)
    })
})

app.listen(5000, () => {
    console.log("Server start")
});

