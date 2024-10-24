const schema = require("../model/taskSchema");
const bcrypt = require("bcryptjs");
const mailer = require("../middleware/mailer")

module.exports.userSignup = async (req, res) => {
    try {
        console.log(req.body);
        
        const user = await schema.create(req.body)
        if (user) {
            res.status(200).json({ msg: "Welcome to the Site!" })
        } 
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Something went wrong, try again" });
    }
}   

module.exports.login = async (req,res) => {
    try {
        const user = await schema.findOne({email:req.body.email})
        console.log(user);
        
        if(!user) {
            return res.status(401).json({msg: "Invalid email"})
        }
        if(req.body.password == user.password) {
            res.status(200).json({msg: "successfull!"})
        }
        // const isCompare = await bcrypt.compare(req.body.password, user.password)
        // console.log(isCompare);
        

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Details not matched"});
      }
}

