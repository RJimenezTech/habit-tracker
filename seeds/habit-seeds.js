const sequelize = require("../config/connection");
const { Habit } = require("../models");

const habitdata = [
  {
    description: "walk the dog in the afternoon",
    user_id: 1,
  },
  {
    description: "workout in the morning",
    user_id: 2,
  },
  {
    description: "read 10 pages",
    user_id: 3,
  },
  {
    description: "read 25 pages",
    user_id: 4,
  },
  {
    description: "walk the dog in the morning",
    user_id: 5,
  },
  {
    description: "workout in the afternoon",
    user_id: 6,
  },
  {
    description: "workout in the morning",
    user_id: 7,
  },
  {
    description: "buy groceries",
    user_id: 8,
  },
  {
    description: "wakeup early",
    user_id: 9,
  },
  {
    description: "go to bed early",
    user_id: 10,
  },
  {
    description: "read 20 pages",
    user_id: 1,
  },
  {
    description: "walk the dog in the afternoon",
    user_id: 2,
  },
  {
    description: "drink 2L of water",
    user_id: 3,
  },
  {
    description: "drink 2L of water",
    user_id: 4,
  },
  {
    description: "clean desk",
    user_id: 5,
  },
  {
    description: "wash the dishes",
    user_id: 6,
  },
  {
    description: "run 1 mile",
    user_id: 7,
  },
  {
    description: "water the plants in the afternoon",
    user_id: 8,
  },
  {
    description: "water the plants in the morning",
    user_id: 9,
  },
  {
    description: "feed the cat",
    user_id: 10,
  },
];

const seedHabits = () => Habit.bulkCreate(habitdata);

module.exports = seedHabits;
