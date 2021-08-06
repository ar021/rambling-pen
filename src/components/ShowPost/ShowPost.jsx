import React from "react";
import "./ShowPost.css";

const ShowPost = ({ post }) => {
  return (
    <div className="showPost">
      <div>{post.tittle}</div>
      <div>{post.description}</div>
      <div>{post.category}</div>
    </div>
  );
};

export default ShowPost;
