const sequelize = require("../config/connection");
const { Habit } = require("../models");

const habitdata = [
  {
    description: "walk the dog in the afternoon",
    category: "mental",
    user_id: 1,
  },
  {
    description: "workout in the morning",
    category: "mental",
    user_id: 2,
  },
  {
    description: "read 10 pages",
    category: "mental",
    user_id: 3,
  },
  {
    description: "read 25 pages",
    category: "mental",
    user_id: 4,
  },
  {
    description: "walk the dog in the morning",
    category: "mental",
    user_id: 5,
  },
  {
    description: "workout in the afternoon",
    category: "physical",
    user_id: 6,
  },
  {
    description: "workout in the morning",
    category: "physical",
    user_id: 7,
  },
  {
    description: "buy groceries",
    category: "physical",
    user_id: 8,
  },
  {
    description: "wakeup early",
    category: "physical",
    user_id: 9,
  },
  {
    description: "go to bed early",
    category: "physical",
    user_id: 10,
  },
  {
    description: "read 20 pages",
    category: "productivity",
    user_id: 1,
  },
  {
    description: "walk the dog in the afternoon",
    category: "physical",
    user_id: 2,
  },
  {
    description: "drink 2L of water",
    category: "physical",
    user_id: 3,
  },
  {
    description: "drink 2L of water",
    category: "physical",
    user_id: 4,
  },
  {
    description: "clean desk",
    category: "physical",
    user_id: 5,
  },
  {
    description: "wash the dishes",
    category: "productivity",
    user_id: 6,
  },
  {
    description: "run 1 mile",
    category: "productivity",
    user_id: 7,
  },
  {
    description: "water the plants in the afternoon",
    category: "productivity",
    user_id: 8,
  },
  {
    description: "water the plants in the morning",
    category: "productivity",
    user_id: 9,
  },
  {
    description: "feed the cat",
    category: "productivity",
    user_id: 10,
  },
];

const seedHabits = () => Habit.bulkCreate(habitdata);

module.exports = seedHabits;
