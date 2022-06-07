const router = require("express").Router();
const { Habit, User, Date } = require("../../models");
const withAuth = require("../../utils/auth");

// get all user
router.get("/", (req, res) => {
  Habit.findAll({
    attributes: ["id", "description", "category", "created_at"],
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
    attributes: ["id", "description", "category", "created_at"],
    include: [
      {
        model: User,
        attributes: ["id", "username"],
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

// // get all habits by user ID
// router.get("/byuser/:id", withAuth, (req, res) => {
//   Habit.findAll({
//     where: {
//       user_id: req.session.user_id,
//     },
//     attributes: ["id", "description", "category"],
//   })
//     .then((dbHabitData) => {
//       if (!dbHabitData) {
//         res.status(404).json({ message: "No habit found with this id" });
//         return;
//       }
//       res.json(dbHabitData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// create a new habit
// expects:
// {
// 	"description": "find dog",
//  "category": "mental",
// 	"user_id": 11
// }
router.post("/", withAuth, (req, res) => {
  Habit.create({
    description: req.body.description,
    category: req.body.category,
    user_id: req.session.user_id,
  })
    .then((dbHabitData) => {
      res.json(dbHabitData);
      console.log(dbHabitData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update title only if logged in though
router.put("/:id", withAuth, (req, res) => {
  Habit.update(
    {
      description: req.body.description,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
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

// update category only if logged in though
router.put("/:id", withAuth, (req, res) => {
  Habit.update(
    {
      category: req.body.category,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
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

// delete habit
router.delete("/:id", withAuth, (req, res) => {
  Habit.destroy({
    where: {
      id: req.params.id,
    },
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
