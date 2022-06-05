const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const habitRoutes = require("./habit-routes.js");
const dateRoutes = require("./date-routes");

router.use("/users", userRoutes);
router.use("/habits", habitRoutes);
router.use("/dates", dateRoutes);
module.exports = router;
