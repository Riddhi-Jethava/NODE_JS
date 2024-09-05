module.exports.home = (req, res) => {
    try {
        res.render('home')
    } catch (err) {
        console.log(err)
        // res.status(500).server("server start");
    }
}

module.exports.about = (req, res) => {
    try {
        res.render('about')
    } catch (err) {
        console.log("error");
    }
}

module.exports.services = (req,res) => {
    try {
        res.render('services')
    } catch(err) {
        console.log("Error")
    }
}

module.exports.contact = (req, res) => {
    try {
        res.render("contact")
    } catch (err) {
        console.log("error")
    }
}