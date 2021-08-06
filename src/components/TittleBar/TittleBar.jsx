import React from "react";
import "./TittleBar.css";

const TittleBar = () => {
  return (
    <>
      <div className="tittleBar">
        <div className="appTitle">
          <span>Rambling Pen</span>
        </div>
        <img
          className="coverImg"
          src="https://images.unsplash.com/photo-1494319827402-c4b839aed26b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </>
  );
};

export default TittleBar;
