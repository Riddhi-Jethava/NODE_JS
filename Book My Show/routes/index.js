const express = require("express");
const routes = express.Router();

const adminCtrl = require('../controllers/adminCtrl');

routes.get("/", adminCtrl.homePage);
routes.get("/form", adminCtrl.form);
routes.post('/insertData',adminCtrl.insertData);
routes.get('/deleteData', adminCtrl.deleteData);
routes.get('/editData', adminCtrl.editData);
routes.get('/updateData', adminCtrl.updateData);

module.exports = routes