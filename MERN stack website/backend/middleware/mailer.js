const mailer = require("nodemailer")

const transport = mailer.createTransport({
    service: "gmail",
    auth: {
        user: "riddhijethava08@gmail.com",
        pass: "hfdc psbp anta bpfp"
    }
});

module.exports.sendOtp = (to, otp) => {
    const mailOption = {
        from: "riddhijethava08@gmail.com",
        to: to,
        subject: "Verification OTP",
        text: `Your verification OTP is ${otp}`
    }

    transport.sendMail(mailOption, (err) => {
        console.log(err ? err : 'OTP Send Successfully');
    })
}