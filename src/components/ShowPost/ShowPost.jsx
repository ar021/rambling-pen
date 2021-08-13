import React from "react";
import "./ShowPost.css";
import { Link } from "react-router-dom";

const ShowPost = ({ post, handleDeletePost, history, user }) => {
  return (
    <div className="showPost">
      <div className="showPostWrapper">
        <img
          className="showPostImg"
          src={
            post.image ||
            "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
          }
          alt=""
        />
        <h1 className="showPostTitle">{post.tittle}</h1>
        <div className="showPostInfo">
          <div className="showPostCat">{post.category}</div>
          {user ? (
            <div className="showPostEdit">
              <Link to={{ pathname: "/edit", state: { post } }}>
                <i className="showPostIcon far fa-edit"></i>
              </Link>
              <button
                className="deleteButton"
                onClick={function () {
                  handleDeletePost(post._id);
                  if (user) {
                    history.push("/");
                  } else {
                    history.push("/login");
                  }
                }}
              >
                <i className="showPostIcon far fa-trash-alt"></i>
              </button>
            </div>
          ) : null}
        </div>
        <p className="showPostDesc">{post.description}</p>
      </div>
      <div className="frame">
        <Link to="/">
          <button class="custom-btn btn-16">Return</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowPost;
