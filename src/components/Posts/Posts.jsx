import React from "react";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="Posts">
      <h2>Posts</h2>
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Posts;
