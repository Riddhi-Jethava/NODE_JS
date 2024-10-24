const userSchema = require("../model/userSchema");
const productSchema = require('../model/productSchema')
const bcrypt = require("bcryptjs");
const mailer = require("../middleware/mailer")
const jwt = require('jsonwebtoken')

module.exports.userSignup = async (req, res) => {
    try {
        const user = await userSchema.create(req.body)
        if (user) {
            res.status(200).json({ msg: "Welcome to the Site!" })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Something went wrong, try again" });
    }
}

module.exports.login = async (req, res) => {
    try {
        const user = await userSchema.findOne({ email: req.body.email })
        console.log(user);

        if (!user) {
            return res.status(401).json({ msg: "Invalid email" })
        }
        if (req.body.password == user.password) {
            const token = jwt.sign({userData : user}, 'node')
            res.status(200).json({ msg: "successfull!",token,user })
        }
        // const isCompare = await bcrypt.compare(req.body.password, user.password)
        // console.log(isCompare);


    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Details not matched" });
    }
}

module.exports.addProducts = async (req, res) => {
    try {
        const data = await productSchema.create(req.body)
        if (data) {
            res.status(200).json({ msg: "Product added!" })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Product not added, try again" });
    }
}

module.exports.showProducts = async (req,res)=>{
    try {
        const products = await productSchema.find({})
        
        if(!products) {
            return res.status(404).json({message : "Products Not Found"})
        }

        res.status(200).json({products})

    } catch (error) {
        console.log(error)
    }
}

module.exports.deleteProduct = async (req,res)=>{
    try {
        const isDelete = await productSchema.findByIdAndDelete(req.query.id)

        isDelete
        ? res.status(200).json({message : "Data Deleted Successfully"})
        : res.status(404).json({message : "Data Not Delete"})
    } catch (error) {
        console.log(error)
    }
}

module.exports.editProduct = async (req,res)=>{
    try {
        const product = await productSchema.findByIdAndUpdate(req.query.id,req.body)

        product 
        ? res.status(200).json({product})
        : res.status(404).json({message : "Not Edited"})

    } catch (error) {
        console.log(error)
    }
}

module.exports.changePassword = async (req, res) => {
    try {
        const person = await userSchema.findById(req.user.userData._id)
        console.log(person)
    } catch (err) {

    }
}
module.exports.forgotPassword = async (req, res) => {
    try {
        const admin = await userSchema.findOne({ email: req.body.email })
        if (!admin) return res.status(404).json({ message: "user Not Found" })
        const otp = Math.floor(5000 + Math.random() * 8000)
        mailer.sendOtp(admin.email, otp)
        res.cookie('otp', otp)
        res.cookie('adminID', admin.id)
        res.status(200).json({ msg: 'OTP Send Successfully' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error Forgot Password", error });
    }
}

module.exports.otpVerification = async (req, res) => {
    console.log(req.body.otp, req.cookies.otp);
    
    if (req.body.otp === req.cookies.otp) {
        //   req.body.newPassword = await bcrypt.hash(req.body.newPassword,10)
        req.body.newPassword = req.body.newPassword;
        const isChange = await userSchema.findByIdAndUpdate(req.cookies.adminID, { password: req.body.newPassword })
        if (isChange) res.status(200).json({ msg: "Password Change Successfully" })
        else res.status(404).json({ msg: "Password Not Modified" })
    } else {
        res.status(401).json({ message: 'Invalid OTP' })
    }
}

