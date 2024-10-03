const express = require("express");

const routes = express.Router();
const controller = require("../controllers/controller");
const passport = require("passport");

routes.get("/", controller.loginPage);
routes.get("/homePage",passport.checkAuthantication, controller.homePage);
routes.get("/form",passport.checkAuthantication, controller.form);
routes.get("/profile", passport.checkAuthantication, controller.profile)
routes.get("/adminData",passport.checkAuthantication, controller.adminData);
routes.get("/deleteData",passport.checkAuthantication, controller.deleteData);
routes.get("/editData",passport.checkAuthantication, controller.editData);
routes.get("/changePassword",passport.checkAuthantication, controller.changePassword);
routes.get("/forgotPassword", controller.forgotPassword)

routes.get('/logout', passport.checkAuthantication, controller.logout);

routes.post("/userLogin", passport.authenticate("local", {failureRedirect: "/"}), controller.userLogin);
routes.post("/insertData", controller.insertData);
routes.post("/updateData", controller.updateData);
routes.post("/updatePassword", controller.updatePassword);
routes.post("/forgetPasswordCheck", controller.forgetPasswordCheck);
routes.post('/otpVerification', controller.otpVerification);
routes.post('/newforgetedPassword', controller.newforgetedPassword)

module.exports = routes