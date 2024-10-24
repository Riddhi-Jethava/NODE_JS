const express = require("express");
const router = express.Router();
const db = require("../config/database");
const controller = require("../controllers/controller")

router.get('/', (req,res)=>{
    res.status(200).json({message : "You Are In Home Page"})
})

router.post("/userSignup", controller.userSignup);
router.post("/login", controller.login);


module.exports = router