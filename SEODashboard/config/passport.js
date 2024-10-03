const passport = require("passport");
const localSt = require('passport-local').Strategy;
const schema = require("../model/schema");

passport.use("local", new localSt(
    { usernameField: 'email' },
    async (email, password, done) => {
        console.log(email, password)
        const data = await schema.findOne({ email: email })
        console.log(data)
        if (data) {
            if (data.password == password) {
                console.log("Data  enter");
                return done(null, data)
            } else {
                console.log("Data Not enter");
                return done(null, false)
            }
        } else {
            return done(null, false)
        }
    }
));

passport.serializeUser((schema, done) => {
    done(null, schema.id)
});

passport.deserializeUser(async (id, done) => {
    const data = await schema.findById(id)
    if (data) {
        done(null, data)
    } else {
        done(null, false)
    }
});

passport.checkAuthantication = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    } else {
        console.log('Not Authanticate');
        res.redirect('/')
    }
}

passport.authUser = (req,res,next)=>{
    if(req.isAuthenticated()){
        res.locals.user = req.user
    }
    next()
}

module.exports = passport