const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Habit extends Model {}

Habit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamp: true,
    freezeTableName: true,
    underscored: true,
    modelName: "habit",
  }
);

module.exports = Habit;
