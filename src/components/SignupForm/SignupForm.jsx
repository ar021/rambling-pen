import React, { Component } from "react";
import userService from "../../services/userService";
import "./SignupForm.css";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    image: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  };

  isFormValid() {
    return !(
      this.state.name &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    );
  }

  render() {
    return (
      <div className="signup">
        <span className="signupTitle">Signup</span>
        <form className="signupForm" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            className="signupInput"
            type="text"
            placeholder="Enter your name..."
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            className="signupInput"
            type="text"
            placeholder="Enter your email..."
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            className="signupInput"
            type="password"
            placeholder="Enter your password..."
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
          <label>Password Confirm</label>
          <input
            className="signupInput"
            type="password"
            placeholder="Confirm your password..."
            value={this.state.passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
          />
          <label>Profile Picture</label>
          <input
            className="signupInput"
            type="text"
            placeholder="Profile picture..."
            value={this.state.image}
            name="image"
            onChange={this.handleChange}
          />
          <div className="frame">
            <button type="submit" className="btn" class="custom-btn btn-16">
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
