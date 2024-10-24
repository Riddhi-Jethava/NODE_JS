const express = require("express");
const router = express.Router();
const db = require("../config/database");
const controller = require("../controllers/controller")

router.get('/', (req,res)=>{
    res.status(200).json({message : "You Are In Home Page"})
})
router.get("/showProducts", controller.showProducts)

router.post("/userSignup", controller.userSignup);
router.post("/login", controller.login);
router.post("/changePassword", controller.changePassword);
router.post("/forgotPassword", controller.forgotPassword);
router.post("/otpVerification", controller.otpVerification);
router.post("/addProducts", controller.addProducts);

router.put('/editProduct', controller.editProduct)

router.delete('/deleteProduct', controller.deleteProduct)


module.exports = router