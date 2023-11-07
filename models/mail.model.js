const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.host,
    auth: {
        type: "OAuth2",
        user: process.env.user,
        clientId: process.env.clientId,
        clientSecret: process.env.clientSecret,
        refreshToken: process.env.refreshToken
    }
});

const sendMail = ({ subject, text }) => {
    transporter.sendMail({
        from: process.env.MAIL_USERNAME,
        to: process.env.MAIL_USERNAME,
        subject: subject,
        text: text
    }, function (err, data) {
        if (err) {
            console.error("Error " + err);
        } else {
            console.log("Email sent successfully");
        }
    });
}

module.exports = {
    sendMail
}