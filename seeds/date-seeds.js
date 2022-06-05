const sequelize = require("../config/connection");
const { Date } = require("../models");

const datedata = [
  {
    date: 20220531,
    habit_id: 1,
    user_id: 1,
  },
  {
    date: 20220531,
    habit_id: 2,
    user_id: 2,
  },
  {
    date: 20220531,
    habit_id: 3,
    user_id: 3,
  },
  {
    date: 20220531,
    habit_id: 4,
    user_id: 4,
  },
  {
    date: 20220531,
    habit_id: 5,
    user_id: 5,
  },
  {
    date: 20220531,
    habit_id: 6,
    user_id: 6,
  },
  {
    date: 20220531,
    habit_id: 7,
    user_id: 7,
  },
  {
    date: 20220531,
    habit_id: 8,
    user_id: 8,
  },
  {
    date: 20220531,
    habit_id: 9,
    user_id: 9,
  },
  {
    date: 20220531,
    habit_id: 10,
    user_id: 10,
  },
  {
    date: 20220601,
    habit_id: 11,
    user_id: 1,
  },
  {
    date: 20220601,
    habit_id: 12,
    user_id: 2,
  },
  {
    date: 20220601,
    habit_id: 13,
    user_id: 3,
  },
  {
    date: 20220601,
    habit_id: 14,
    user_id: 4,
  },
  {
    date: 20220601,
    habit_id: 15,
    user_id: 5,
  },
  {
    date: 20220601,
    habit_id: 16,
    user_id: 6,
  },
  {
    date: 20220601,
    habit_id: 17,
    user_id: 7,
  },
  {
    date: 20220601,
    habit_id: 18,
    user_id: 8,
  },
  {
    date: 20220601,
    habit_id: 19,
    user_id: 9,
  },
  {
    date: 20220601,
    habit_id: 20,
    user_id: 10,
  },
];

const seedDates = () => Date.bulkCreate(datedata);

module.exports = seedDates;
