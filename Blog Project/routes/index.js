const express = require("express");
const routes = express.Router();
const admin = require("../model/adminSchema");
const adminCtrl = require("../controllers/adminController");
const auth = require('../authantication/auth')
routes.get("/", adminCtrl.login)
routes.post('/login', adminCtrl.loginAdmin);
const multer = require('multer')

const Storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename :(req,file,cb)=> {
        cb(null,file.fieldname+ "-"+Date.now())
    }
})

const upload = multer({storage : Storage}).single('image')

routes.get("/dashboard", auth,adminCtrl.dashboard);
routes.get("/form",auth, adminCtrl.form);
routes.get("/adminData",auth, adminCtrl.adminData);
routes.get("/deleteData",auth, adminCtrl.deleteData);
routes.get("/editData",auth, adminCtrl.editData);
routes.get("/clearCookies",auth, adminCtrl.clearCookies);
routes.post("/insertData", auth,upload,adminCtrl.insertData);
routes.post("/updateData",auth, upload,adminCtrl.updateData);



module.exports = routes