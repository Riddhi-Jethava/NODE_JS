const express = require("express");
const port = 1001
const path = require("path")

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());
// app.use("public", express.static(path.join(__dirname,"/public")))

app.use("/", require("./routes"));

app.listen(port, (err) => {
    console.log(err ? err : `Server start on port ${port}`)
})