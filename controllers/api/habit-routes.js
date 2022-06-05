const router = require("express").Router();
// const { response } = require("express");
const { Habit, User, Date } = require("../../models");

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

// get habit by ID
router.get("/:id", (req, res) => {
  Habit.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "description", "created_at"],
    include: [
      {
        model: User,
        attributes: ["id", "username"],
        include: {
          model: Date,
          attributes: ["id", "date", "habit_id"],
        },
      },
    ],
  })
    .then((dbHabitData) => {
      if (!dbHabitData) {
        res.status(404).json({ message: "No habit found with this id" });
        return;
      }
      res.json(dbHabitData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
