const passport = require("passport");
const passportSt = require('passport-local').Strategy;

const user = require("../model/dashSchema");

passport.use("local", new passportSt(
    { usernameField: 'email' },
    async (email, password, done) => {  
        console.log(email,password)
        const data = await user.findOne({ email: email })
        console.log(data)
        if (data) {
            if (data.password !== password) {
                return done(null, false)
            } else {
                return done(null, data)
            }
        } else {
            return done(null, false)
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser(async (id, done) => {
    const data = await user.findById(id)
    if (data) {
        done(null, data)
    } else {
        done(null, false)
    }
});

passport.checkAuth = (req,res,next)=>{
    const user = req.user
    if(user.isAuthanticated()){
        next()
    } else{
        res.redirect('/')
    }
}

module.exports = passport