import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      {/* <div className="">{tittle}</div>
      <div className="">{description}</div>
      <div className="">{category}</div> */}
      <img className="postImg" src="" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{post.category}</span>
        </div>
        <span className="postTitle">{post.tittle}</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
};

export default Post;
