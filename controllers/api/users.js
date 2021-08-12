const Post = require("../../models/post");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    console.log(user);
    // TODO: Send back a JWT instead of the user
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

module.exports = {
  signup,
};
