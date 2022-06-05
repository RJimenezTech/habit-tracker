const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "sampleuser01",
    email: "sampleuser01@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser02",
    email: "sampleuser02@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser03",
    email: "sampleuser03@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser04",
    email: "sampleuser04@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser05",
    email: "sampleuser05@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser06",
    email: "sampleuser06@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser07",
    email: "sampleuser07@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser08",
    email: "sampleuser08@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser09",
    email: "sampleuser09@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser10",
    email: "sampleuser10@mail.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
