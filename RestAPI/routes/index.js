const express = require('express');
const routes = express.Router()
const controller = require('../controller/admin')

routes.get("/", (req,res) => {
    res.status(200).json({message: "HomePage"})
})

routes.use("/user", require("./user"))

module.exports = routes