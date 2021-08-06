import React from "react";
import { Link } from "react-router-dom";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts card-group">
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Posts;
