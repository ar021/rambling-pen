import React, { Component } from "react";
import userService from "../../services/userService";
import "./Login.css";

export class Login extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  render() {
    return (
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your email..."
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
            value={this.state.pw}
            name="pw"
            onChange={this.handleChange}
          />
          <div className="frame">
            <button type="submit" className="btn" class="custom-btn btn-16">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
