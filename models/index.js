const User = require("./User");
const Habit = require("./Habit");
const Date = require("./Date");

User.hasMany(Habit, {
  foreignKey: "user_id",
});

Habit.belongsTo(User, {
  foreignKey: "user_id",
});

Date.belongsTo(Habit, {
  foreignKey: "habit_id",
});

Date.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Habit,
  Date,
};
