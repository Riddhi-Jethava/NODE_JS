const express = require("express");
const manager = express.Router()
const managerCtrl = require("../controllers/managerController");

manager.post("/managerLogin", managerCtrl.managerLogin)
manager.get("/profile", managerCtrl.profile)
manager.get("/viewManager", managerCtrl.viewManager)
manager.post("mngrforgetPass", managerCtrl.mngrforgetPass)
manager.post("/mngrChangePasscode", managerCtrl.mngrChangePasscode)
manager.post("/addEmployee", managerCtrl.addEmployee)
manager.get("/viewEployee", managerCtrl.viewEmployee)
manager.delete("/deleteEmployee", managerCtrl.deleteEmployee)

module.exports = manager