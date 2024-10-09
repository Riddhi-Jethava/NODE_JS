const express = require('express');
const routes = express.Router()
const controller = require('../controllers/products')
const multer = require('multer')

const Storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null, "uploads/")
    },
    filename : (req,file,cb)=>{
        cb(null, file.fieldname + "-" + Date.now())
    }
})

const uploadImage = multer({storage : Storage}).single('productImage')

routes.get('/addProducts', controller.addProduct)
routes.get('/viewProducts', controller.viewProducts)
routes.get('/deleteProduct', controller.deleteProduct)
routes.get('/editProduct', controller.editProduct)

routes.post('/addProduct',uploadImage, controller.addProductPost)
routes.post('/updateProduct',uploadImage, controller.updateProduct)

module.exports = routes