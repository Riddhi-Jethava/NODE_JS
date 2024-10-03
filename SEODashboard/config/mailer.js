const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "riddhijethava08@gmail.com",
        pass: "hsugzakxibfhbuil"
    }
})

module.exports.sendOtp = (to, otp) => {
    const mailOptions = {
        from: "riddhijethava08@gmail.com",
        to: to,
        subject: "Verification OPT",
        text: `Tour verification OTP is ${otp}`
    }

    transport.sendMail(mailOptions, (err) => {
        console.log(err ? err : 'OTP send successfully')
    })
}

