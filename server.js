const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3001;
// const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.DB_SECRET,
  cookie: {},
  resave: false,
  saveUnintialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "/public/images")));
app.use(require("./controllers/"));

var nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");
var transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: "rjimeneztech@gmail.com",
    pass: process.env.DB_AOL_PW,
  },
});

var mailOptions = {
  from: "habitual2022@aol.com",
  to: "rjimeneztech@gmail.com",
  subject: "Sending Email using Nodemailer and Node.js",
  text: "This is the email!!!",
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

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
