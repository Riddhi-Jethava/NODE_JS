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
            if (data.password !== password) {
                return done(null, false)
            } else {
                return done(null, true)
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
})

// passport.chekAuth = (req,res,next) => {
//     const user = req.user
//     if(user.isAuthanticated()){
//        
//     } else {
//         res.redirect("/")
//     }
// }

passport.checkAuthantication = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    } else {
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