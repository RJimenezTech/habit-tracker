const router = require("express").Router();
// const { response } = require("express");
const { Habit, User, Date } = require("../../models");

// get all user
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

module.exports = router;
