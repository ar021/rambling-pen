const Post = require("../../models/post");

async function index(req, res) {
  const posts = await Post.find({});
  res.status(200).json(posts);
}

async function create(req, res) {
  const post = await Post.create(req.body);
  res.status(200).json(post);
}

async function show(req, res) {
  const post = await Post.findById(req.params.id);
  res.status(200).json(post);
}

module.exports = {
  index,
  create,
  show,
};
