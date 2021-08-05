import React from "react";
import "./Post.css";

const Post = ({ tittle, description, category, image }) => {
  return (
    <div className="Post">
      <div className="">{tittle}</div>
      <div className="">{description}</div>
      <div className="">{category}</div>
    </div>
  );
};

export default Post;
