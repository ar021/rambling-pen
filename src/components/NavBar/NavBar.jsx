import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navLeft">
        <img
          className="navImg"
          src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2915&q=80"
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
          <li className="navListItem">
            <Link className="link" to="/signup">
              SIGNUP
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
