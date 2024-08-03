const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));

var studentData = [
    {
        id: 1,
        name: "Kunji"
    },
    {
        id: 2,
        name: "Rakhi"
    }
]

app.set("view engine", "ejs");

app.get("/", (req, res) => {
 res.render("index", {
    student: studentData
 })
});

app.post("/insertData", (req,res) => {
    const { id, name } = req.body;

    // const i= parseInt(id) ? parseInt(id) : id 

    let obj = {
        id: id,
        name: name
    }

    studentData.push(obj);
    res.redirect("/");
});

app.get("/deleteData", (req, res) => {
    const id = parseInt(req.query.userid , 10);

    const data = studentData.filter((el) => el.id != id);

    studentData = data;

    res.redirect("back");
});

app.get("/edit", (req,res) => {
    // const id = parseInt(req.query.userid,10);

    const data = studentData.find(el => el.id == id)

    if(data) {
        res.render("edit", {
            data: data
        }) 
        } else { 
            res.redirect("/")
    }

}); 

app.post("/update", (req,res) => {

    // const id = parent(req.query.userid, 10);

    const { name } = req.body;

    studentData = studentData.map((el) => {
        if (el.id === id) {
            return { id, name };
        }
        return el;
    });

    res.redirect("/");
})

app.listen(3000, ()=> {
    console.log("server start")
});