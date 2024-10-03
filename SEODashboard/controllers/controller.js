const schema = require("../model/schema");
const mailer = require("../config/mailer")

module.exports.loginPage = (req, res) => {
    res.render("loginPage")
}

module.exports.userLogin = (req, res) => {
    // res.render("homePage")
    // const user = await schema.findOne({ email: req.body.email });
    // if (!user) {
    //   return res.redirect("/");
    // }
    // user.password == req.body.password
    //   ? res.redirect("/")
    //   : res.redirect("back");
    res.redirect('/homepage')
}

module.exports.homePage = async (req, res) => {
    res.render("homePage")
}

module.exports.form = async (req, res) => {
    res.render("form")
}

module.exports.insertData = async (req, res) => {
    let data = await schema.create(req.body)
    data ? res.redirect("/adminData") : console.log("Data not added")
}

module.exports.adminData = async (req, res) => {
    let data = await schema.find({})
    // console.log(data)
    data ? res.render("adminData", { data }) : console.log("data not founded")
}

module.exports.deleteData = async (req, res) => {
    let deleteData = await schema.findByIdAndDelete(req.query.id)
    deleteData ? res.redirect("/adminData") : console.log("Data is not deleted")
}

module.exports.editData = async (req, res) => {
    let edit = await schema.findById(req.query.id);
    edit ? res.render("editData", { edit }) : console.log("Data is not edit yet !")
}

module.exports.updateData = async (req, res) => {
    let update = await schema.findByIdAndUpdate(req.query.id, req.body)
    update ? res.redirect("/adminData") : console.log("Data not updated");
}

module.exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err); // Handle error if any occurs during logout
        }
        req.session.destroy((err) => {
            if (err) {
                return next(err); // Handle error during session destruction
            }
            res.redirect('/'); // Redirect to login or another page after logout
        });
    });
};

module.exports.profile = (req, res) => {
    res.render("profile")
}

module.exports.changePassword = (req, res) => {
    res.render("changePassword")
}

module.exports.updatePassword = async (req, res) => {
    let oldPass = req.user.password
    let id = req.user.id

    if (oldPass == req.body.oldPass) {

        if (req.body.oldPass != req.body.newPass) {

            if (req.body.newPass == req.body.confPass) {
                console.log(id);
                let adminData = await schema.findByIdAndUpdate(id, { password: req.body.newPass })
                adminData ? res.redirect("/logout") : console.log("Something went wrong!")
            } else {
                console.log("new password and confirm password are different");
            }

        } else {
            console.log("old password and new password must be different")
        }

    } else {
        console.log("current password is wrong")
    }
}

module.exports.forgotPassword = (req, res) => {
    res.render("forgotPassword")
}

module.exports.forgetPasswordCheck = async (req, res) => {
    const user = await schema.findOne({ email: req.body.email })
    console.log(user);
    
    if (user) {
        const otp = Math.floor(1000 + Math.random() * 9000);
        mailer.sendOtp(user.email, otp);
        req.session.otp = otp,
            req.session.adminId = user.id
        const msg = "OTP sent successfully"
        res.render("otp", { msg: msg })
    } else {
        req.flash("error", "Email unvalid");
        res.redirect("/forgotPassword")
    }
}

module.exports.otpVerification = (req, res) => {
    if (req.body.otp == req.session.otp) {
        res.render('newPassword')
    } else {
        const msg = "Invalid OTP please enter right OTP"
        res.render("otp", { msg: msg })
    }
}

module.exports.newforgetedPassword = async (req, res) => {
    try {
        const user = await schema.findByIdAndUpdate(req.session.adminId, { password: req.body.newPassword })
        if (user) {
            req.flash("success", "Password Changed Successfully")
            res.redirect('/')
        } else {
            req.flash("error", "Something went wrong")
            res.redirect('/forgetPassword')
        }
    } catch (error) {
        console.log(error)
    }
}