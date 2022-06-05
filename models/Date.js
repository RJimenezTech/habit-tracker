const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Date extends Model {}

Date.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    date: {
      // format id is "YYYYMMDD"
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    habit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "date",
  }
);

module.exports = Date;
