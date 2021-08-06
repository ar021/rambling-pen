import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navLeft">
        <img
          className="navImg"
          src="https://cdn.shortpixel.ai/spai/w_746+q_lossy+ret_img+to_webp/https://everydayshessparkling.com/wp-content/uploads/2020/01/Best-Blogging-Tools-and-Resources-for-New-Bloggers.jpg"
          alt=""
        />
        <i cl className="navIcon fas fa-search"></i>
      </div>
      <div className="navCenter">
        <div className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/add">
              WRITE
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
        </div>
      </div>
      <div className="navRight">
        <div className="navList">
          {/* <Link className="link" to="/add">
          <i className="navIcon fas fa-pen-nib"></i>
        </Link> */}
          <li className="navListItem">
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/logout">
              LOGOUT
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
