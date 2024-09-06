const express = require("express");
const routes = express.Router();

const adminCtrl = require('../controllers/adminCtrl');
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { fstat } = require("fs");
const { log } = require("console");
routes.use('/uploads',express.static(path.join(__dirname, "uploads")))

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now())
    }
});

const uploads = multer({ storage: Storage }).fields([
    { name: 'moviePoster', maxCount: 1 },
    { name: 'movieName', maxCount: 1 }
]);

routes.get("/", adminCtrl.homePage);
routes.get("/form", adminCtrl.form);
routes.post('/insertData', adminCtrl.insertData);
routes.get('/deleteData', adminCtrl.deleteData);
routes.get('/editData', adminCtrl.editData);
routes.post('/updateData', adminCtrl.updateData);

module.exports = routes