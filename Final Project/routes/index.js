const express = require("express");
const router = express.Router();
const db = require("../config/database")
const controller = require("../controllers/taskCtrl");

router.get("/", controller.loginPage);
router.post("/userLogin", controller.userLogin);
router.get("/homePage", controller.homePage);
router.get("/signupPage", controller.signupPage);
router.post("/userSignup", controller.userSignup);
router.get("/nodeTask", controller.nodeTask)

module.exports = router