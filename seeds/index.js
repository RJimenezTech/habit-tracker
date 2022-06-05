const seedUsers = require("./user-seeds");
const seedHabits = require("./habit-seeds");
const seedDates = require("./date-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");

  await seedHabits();
  console.log("--------------");

  await seedDates();
  console.log("--------------");

  process.exit(0);
};

seedAll();
