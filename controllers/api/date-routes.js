const router = require("express").Router();
// const { response } = require("express");
const { Habit, User, Date } = require("../../models");

// get all dates
router.get("/", (req, res) => {
  Date.findAll({
    attributes: [
      "id",
      "date",
      "habit_id",
      // "user_id"
    ],
    include: [
      // {
      //   model: User,
      //   attributes: ["id", "username"],
      // },
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
    attributes: [
      "date",
      "habit_id",
      // "user_id"
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

// find a date that has a specific habit
// expects: "/api/dates/20220531/5"
router.get("/:date/:habit", (req, res) => {
  Date.findAll({
    where: {
      date: req.params.date,
      habit_id: req.params.habit,
    },
    attributes: [
      "date",
      "habit_id",
      // "user_id"
    ],
    include: [
      {
        model: Habit,
        attributes: ["description"],
      },
      // {
      //   model: User,
      //   attribute: ["username"],
      // },
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

// create a new date
// expects
// {
// "date": 20220531,
// "habit_id": 21,
// "user_id": 11
// }
router.post(
  "/",
  //  withAuth,
  (req, res) => {
    Date.create({
      date: req.body.date,
      // user_id: req.session.user_id,
      habit_id: req.body.habit_id,
      // user_id: req.body.user_id,
    })
      .then((dbDateData) => res.json(dbDateData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
);

// delete date record
// {
//   "date": 20220531,
//   "habit_id": 5,
//   "user_id": 2
// }
router.delete(
  "/",
  // withAuth,
  (req, res) => {
    Date.destroy({
      where: {
        date: req.body.date,
        habit_id: req.body.habit_id,
        // user_id: req.session.user_id,
        // user_id: req.body.user_id,
      },
    })
      .then((dbDateData) => {
        if (!dbDateData) {
          res.status(404).json({ message: "No date found with this id!" });
          return;
        }
        res.json(dbDateData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
);

module.exports = router;
