const express = require("express")
const categoryCtrl = require("../controllers/categoryController")
const routes = express.Router()
const passport = require("passport")

routes.get("/addCategory", categoryCtrl.addCategory)

module.exports = routes