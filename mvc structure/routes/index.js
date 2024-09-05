const express = require("express");
const routes = express.Router();

const adminCtrl = require("../controllers/admitCtrl")

routes.get('/', adminCtrl.home);
routes.get('/about', adminCtrl.about);
routes.get('/services', adminCtrl.services);
routes.get('/contact', adminCtrl.contact);

module.exports = routes