import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  state = {
    first: "",
    last: "",
    email: "",
    password: "",
    password2: ""
  };

  handleChange = ({ target }) => {
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  };

  isDisabled = () => {
    const { first, last, email, password, password2 } = this.state;
    return !(first && last && email && password && password2);
  };

  handleSubmit = () => {
    const usersData = JSON.parse(localStorage.getItem("usersData"));
    const { first, last, email, password } = this.state;
    const id = usersData && usersData.length ? usersData.length + 1 : 1;
    const newUser = [
      {
        id: id,
        firstName: first,
        lastName: last,
        eMail: email,
        password: password,
        removeRequest: 0
      }
    ];

    const users =
      usersData && usersData.length ? [...usersData, ...newUser] : [...newUser];
    localStorage.setItem("usersData", JSON.stringify(users));
    document.location.href = "http://localhost:3000/posts";
  };

  render() {
    const { first, last, email, password, password2 } = this.state;

    return (
      <div className="register-form">
        <div className="logo">
          <i className="fa fa-camera" />
        </div>
        <div>
          <h1>InstaClone</h1>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            value={first}
            name="first"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={last}
            name="last"
            onChange={this.handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={password2}
            name="password2"
            onChange={this.handleChange}
          />
        </div>
        <button
          className="btn btn-primary btn-left"
          onClick={this.handleSubmit}
          disabled={this.isDisabled()}
        >
          Sign up
        </button>
        <div className="to-registration">
          Already registered? <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }
}
