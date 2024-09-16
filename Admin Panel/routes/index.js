const express = require("express");
const routes = express.Router();
const adminCrud = require("../model/adminSchema")

const adminCtrl = require("../controllers/adminCtrl");

routes.get("/", adminCtrl.login);
routes.post("/loginUser", adminCtrl.loginUser);
routes.get('/dashboard', adminCtrl.dashboard)
routes.get("/addAdmin", adminCtrl.form);
routes.get("/viewData", adminCtrl.viewDetails);
routes.get("/deleteData", adminCtrl.deleteData);
routes.get("/editData", adminCtrl.editData);
routes.post("/insertData", adminCtrl.insertData);
routes.post("/updateData", adminCtrl.updateData);

module.exports = routes

