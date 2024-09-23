const express = require("express");

const routes = express.Router();

const user = require("../model/dashSchema");
const controller = require("../controllers/userCtrl");
const passport = require("passport")

routes.get("/", controller.login);
routes.get("/homePage", controller.homePage);
routes.get("/form", controller.form); 
routes.get("/deleteData", controller.deleteData);
routes.get("/editData", controller.editData);

routes.post("/login", passport.authenticate("local", {failureRedirect: "/"}),  controller.userLogin)
routes.post("/insertData", controller.insertData);
routes.post("/updateData", controller.updateData);

module.exports = routes