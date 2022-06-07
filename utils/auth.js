const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    console.log("not worky!");
    res.redirect("/login");
  } else {
    console.log("worky!");
    next();
  }
};

module.exports = withAuth;
