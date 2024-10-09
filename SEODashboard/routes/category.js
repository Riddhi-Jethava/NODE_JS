const express = require("express")
const categoryCtrl = require("../controllers/categoryController")
const routes = express.Router()
const multer = require('multer')
const passport = require("passport")

const Storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null, "uploads/")
    },
    filename : (req,file,cb)=>{
        cb(null, file.fieldname + "-" + Date.now())
    }
})

const uploadImage = multer({storage : Storage}).single('categoryImage')

routes.get("/addCategory", categoryCtrl.addCategory);
routes.get("/viewCategory", categoryCtrl.viewCategory);
routes.get('/deleteCategory', categoryCtrl.deleteCategory)
routes.get('/editCategory', categoryCtrl.editCategory)

routes.post("/addCategory", uploadImage, categoryCtrl.addCategoryPost);

module.exports = routes