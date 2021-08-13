function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Dont be Spooky" });
}

module.exports = checkAuth;
