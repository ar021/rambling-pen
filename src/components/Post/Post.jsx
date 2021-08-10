import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post, key }) => {
  return (
    <div className="post card">
      {/* <div className="">{tittle}</div>
      <div className="">{description}</div>
      <div className="">{category}</div> */}
      <img
        className="postImg card-img-top "
        src={
          post.image ||
          "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        }
        alt=""
      />
      <div className="postInfo card-body">
        <div className="postCat">{post.category}</div>
        <span className="postTitle">{post.tittle}</span>
        <span className="postDate">{post.updatedAt}</span>
      </div>
      <p className="postDesc">{post.description}</p>
      <div className="frame card-footer">
        <Link
          to={{
            pathname: "/details",
            state: { post },
          }}
        >
          <button class="custom-btn btn-16">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
