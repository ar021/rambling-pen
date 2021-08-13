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
        <div className="formTittle">
          <span>Login</span>
        </div>
        <img
          className="formImg"
          src="https://images.unsplash.com/photo-1573706518886-f90f89c72f14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
        {/* <span className="loginTitle">Login</span> */}
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
