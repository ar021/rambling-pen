import React from "react";
import Login from "../../components/Login/Login";
import "./LoginPage.css";

export default function LoginPage({ history, handleSignupOrLogin }) {
  return (
    <div className="loginPage">
      <Login history={history} handleSignupOrLogin={handleSignupOrLogin} />
    </div>
  );
}
