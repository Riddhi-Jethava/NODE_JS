const schema = require("../model/taskSchema")

module.exports.loginPage = (req,res) => {
    res.render("loginPage")
}

module.exports.userLogin = (req,res) => {
    res.redirect("/homePage")
}

module.exports.signupPage = (req,res) => {
    res.render("signupPage")
}

module.exports.userSignup = (req,res) => {
    res.redirect("/homePage")
}

module.exports.homePage = (req,res) => {
    res.render("homePage")
}

module.exports.nodeTask = (req,res) => {
    res.render("nodeTask")
}