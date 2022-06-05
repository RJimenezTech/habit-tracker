const router = require("express").Router();
// const { response } = require("express");
const { Habit, User } = require("../../models");

// get all user
router.get("/", (req, res) => {
  Habit.findAll({
    attributes: ["id", "description", "created_at"],
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
  })
    .then((dbHabitData) => res.json(dbHabitData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
