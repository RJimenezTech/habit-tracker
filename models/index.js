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
  foreignKey: "id",
});

Date.belongsTo(User, {
  foreignKey: "id",
});

User.hasMany(Date, {
  foreignKey: "user_id",
});

Habit.hasMany(Date, {
  foreignKey: "habit_id",
});

module.exports = {
  User,
  Habit,
  Date,
};
