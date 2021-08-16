import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ user, handleLogout }) => {
  let leftNav = user ? (
    <li className="navListItem">
      <Link className="link" to="/" onClick={handleLogout}>
        LOGOUT
      </Link>
    </li>
  ) : (
    <>
      <li className="navListItem">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </li>
      <li className="navListItem">
        <Link className="link" to="/signup">
          SIGNUP
        </Link>
      </li>
    </>
  );
  let centerNav = user ? (
    <li className="navListItem">
      <Link className="link" to="/add">
        WRITE
      </Link>
    </li>
  ) : null;
  return (
    <div className="navbar">
      <div className="navLeft">
        <img
          className="navImg"
          src={
            user
              ? user.image
              : "https://devtalk.blender.org/uploads/default/original/2X/c/cbd0b1a6345a44b58dda0f6a355eb39ce4e8a56a.png"
          }
          alt=""
        />
        <span> {user ? `Welcome, ${user.name}` : ""}</span>
        <i cl className="navIcon fas fa-search"></i>
      </div>
      <div className="navCenter">
        <div className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          {centerNav}
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
          {leftNav}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
