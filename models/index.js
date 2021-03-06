const User = require("./User");
const Habit = require("./Habit");
const Date = require("./Date");

User.hasMany(Habit, {
  foreignKey: "user_id",
});

Habit.belongsTo(User);

Date.belongsTo(Habit);

// Date.belongsTo(User, {
//   foreignKey: "id",
// });

// User.hasMany(Date, {
//   foreignKey: "user_id",
// });

Habit.hasMany(Date);

module.exports = {
  User,
  Habit,
  Date,
};
