import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post, key }) => {
  return (
    <div className="post card">
      {/* <div className="">{tittle}</div>
      <div className="">{description}</div>
      <div className="">{category}</div> */}
      <img className="postImg card-img-top " src="" alt="" />
      <div className="postInfo card-body">
        <div className="postCats">
          <span className="postCat">{post.category}</span>
        </div>
        <span className="postTitle">{post.tittle}</span>
        <hr />
        <span className="postDate">1 hour ago</span>
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
