const express = require("express");
const port = 1001
const path = require("path")

const app = express();
const cors = require('cors');
const cookie = require("cookie-parser")

app.set("view engine", "ejs");
app.use(express.urlencoded());
// app.use("public", express.static(path.join(__dirname,"/public")))
app.use(cors({ origin: 'http://localhost:5173', credintials: true }));
app.use(cookie())
app.use(express.json());

app.use("/", require("./routes/index"));

app.listen(port, (err) => {
    console.log(err ? err : `Server start on port ${port}`)
})