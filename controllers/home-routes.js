const router = require("express").Router();
// const { response } = require("express");
const { User, Habit, Date } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/dashboard", (req, res) => {
  User.findOne({
    where: {
      id: req.session.user_id,
    },
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Habit,
        attributes: ["id", "description", "created_at"],
      },
    ],
  })
    .then((dbUserData) => {
      const user_habits = dbUserData.habits.map((habit) =>
        habit.get({ plain: true })
      );
      console.log(user_habits);
      res.render("dashboard", { user_habits, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
