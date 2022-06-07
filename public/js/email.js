const nodemailer = require("nodemailer");
// const { getMaxListeners } = require("process");
const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: "rjimeneztech@gmail.com",
    pass: process.env.DB_AOL_PW,
  },
});

const sendWelcomeEmail = (userEmail) => {
  const mailOptions = {
    from: "habitual2022@aol.com",
    to: "rjimeneztech@gmail.com",
    subject: "Welcome to Habitual",
    text: `Thanks for signing up!`,
  };

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendWelcomeEmail;
