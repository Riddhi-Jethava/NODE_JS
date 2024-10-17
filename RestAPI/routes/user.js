const express = require('express');
const routes = express.Router();
const controller = require('../controller/admin');
const multer = require("multer");

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now());
    }
})

const uploadImage = multer({ storage: Storage }).single('image');

routes.get('/', controller.home);

routes.post('/insertData',uploadImage, controller.insertData);

routes.delete("/deleteData", controller.deleteData);

routes.put('/updateData', controller.updateData);

module.exports = routes