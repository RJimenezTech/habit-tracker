const router = require("express").Router();
// const { response } = require("express");
const { Habit, User, Date } = require("../../models");

// get all dates
router.get("/", (req, res) => {
  Date.findAll({
    attributes: ["id", "date", "habit_id", "user_id"],
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
      {
        model: Habit,
        attributes: ["id", "description"],
      },
    ],
  })
    .then((dbDateData) => res.json(dbDateData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all dates by date
router.get("/:date", (req, res) => {
  Date.findAll({
    where: {
      date: req.params.date,
    },
    attributes: ["date", "habit_id", "user_id"],
  })
    .then((dbDateData) => {
      if (!dbDateData) {
        res.status(404).json({ message: "No date found with this id" });
        return;
      }
      res.json(dbDateData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// find a date that has a specific habit
router.get("/:date/:habit", (req, res) => {
  Date.findAll({
    where: {
      date: req.params.date,
      habit_id: req.params.habit,
    },
    attributes: ["date", "habit_id", "user_id"],
    include: [
      {
        model: Habit,
        attributes: ["description"],
      },
      {
        model: User,
        attribute: ["username"],
      },
    ],
  })
    .then((dbDateData) => {
      if (!dbDateData) {
        res.status(404).json({ message: "No date found with this id" });
        return;
      }
      res.json(dbDateData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
