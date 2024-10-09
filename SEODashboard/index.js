const express = require("express");
const port = 5001;
const app = express();

const path = require("path");

const db = require("./config/database");
const schema = require("./model/schema");
const session = require('express-session');
const passport = require("passport");
const localSt = require("./config/passport");
const { request } = require("http");
const flash = require("connect-flash");
const connectFlash = require("./config/flashConnect")

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads', express.static(path.join(__dirname, "uploads")))

app.use(session({
    name: "demo",
    secret: "keyboard",
    resave: true,
    saveUnitioalized: false,
    cookie: { maxAge: 100 * 100 * 60 }
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authUser);
app.use(flash());
app.use(connectFlash.flashData)

app.use("/", require("./routes"));
app.use("/category", require("./routes/category"))
app.use('/subcategory', require('./routes/subCategory'))
app.use('/products', require('./routes/products'))

app.listen(port, (err) => {
    console.log(err ? "error occured" : `server start on port = ${port}`)
});