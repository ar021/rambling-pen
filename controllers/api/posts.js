const post = require("../../models/post");
const Post = require("../../models/post");
const User = require("../../models/user");

async function index(req, res) {
  const posts = await Post.find({});
  res.status(200).json(posts);
}

async function create(req, res) {
  console.log(`useradd${req.user._id}`);
  const post = await Post.create(req.body);
  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    {
      $push: { posts: post._id },
    },
    { new: true, useFindAndModify: false }
  );
  console.log(`newUseradd ${updatedUser} and newPost ${post}`);
  res.status(200).json(post);
}

// async function show(req, res) {
//   const post = await Post.findById(req.params.id);
//   console.log("iam here");
//   res.status(200).json(post);
// }

async function deleteOne(req, res) {
  console.log(`userdele${req.user}`);
  const user = await User.findById(req.user._id);
  const postArry = user.posts;
  const includes = postArry.includes(req.params.id);
  console.log(includes);
  if (includes) {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        $pull: { posts: post._id },
      },
      { new: true, useFindAndModify: false }
    );
    const deletedPost = await Post.findByIdAndRemove(req.params.id);
    console.log(`newUserdel ${updatedUser}`);
    res.status(200).json(deletedPost);
  } else {
    res.status(405).json("Not allowed");
  }
}

async function update(req, res) {
  console.log(`userUp${req.user}`);
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  console.log(`updatePost ${updatedPost}`);
  res.status(200).json(updatedPost);
}

module.exports = {
  index,
  create,
  // show,
  delete: deleteOne,
  update,
};
