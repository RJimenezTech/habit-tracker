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

// async function sendUserDailyEmail() {
//   let today = new Date();
//   const dd = String(today.getDate()).padStart(2, "0");
//   const mm = String(today.getMonth() + 1).padStart(2, "0");
//   const yyyy = today.getFullYear();
//   today = mm + "/" + dd + "/" + yyyy;

//   const response = await fetch("/api/users", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });

//   response.forEach((user) => {
//     const mailOptions = {
//       from: "habitual2022@aol.com",
//       to: `${user.email}`,
//       subject: "Habitual Daily Recap - ${today}",
//       text: `${user.habits.forEach(console.log(habits.description + "\n"))}`,
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Email sent: " + info.response);
//       }
//     });
//   });
// }

module.exports = {
  sendWelcomeEmail,
  // sendUserDailyEmail
};
