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

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const sendWelcomeEmail = (userEmail) => {
  const mailOptions = {
    from: "habitual2022@aol.com",
    to: `${userEmail}`,
    subject: "Welcome to Habitual",
    text: `Thanks for registering with Habitual!`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const sendUnsubscribeEmail = (userEmail) => {
  const mailOptions = {
    from: "habitual2022@aol.com",
    to: `${userEmail}`,
    subject: "Unsubscribed Successfully",
    text: `You have deleted your Habitual account! \n\n Sorry to see you go!`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
  sendWelcomeEmail,
  sendUnsubscribeEmail,
};
