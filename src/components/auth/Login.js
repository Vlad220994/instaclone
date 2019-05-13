import React, { Component, Fragment } from "react";

import AllPosts from "../Posts/AllPosts";
import { Link } from "react-router-dom";
import isLogin from "../../redux/actions/login"
import "./Login.scss";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: false,
    isLogin: false
  };

  handleChange = ({ target }) => {
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  };

  handleSubmit = () => {
    const usersData = JSON.parse(localStorage.getItem("usersData"));
    const { email, password } = this.state;
    const isExistPassword =
      usersData &&
      usersData.some(
        item => item.eMail === email && item.password === password
      );

    if (isExistPassword) {
      this.setState({
        isLogin: true
      })
    } else {
      this.setState({
        error: true
      });
    }

    this.props.isLogin(true);
  };

  isDisabled = () => {
    const { email, password } = this.state;
    return !(email && password);
  };

  render() {
    const { email, password, error, isLogin } = this.state;
    
    return (
      <Fragment>
        {isLogin ? <AllPosts /> : (
        <div className="login-form">
          <div className="logo">
            <i className="fa fa-camera" />
          </div>
          <h1>InstaClone</h1>
          <div>
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
          </div>
          {error ? <div className="error">Incorrect login or password</div> : null}
          <button
            className="btn btn-primary btn-left"
            onClick={this.handleSubmit}
            disabled={this.isDisabled()}
          >
            Login
          </button>
          <div className="to-registration">
            First time on InstaClone? <Link to="/register">Registration</Link>
          </div>
        </div>
        )}
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  isLogin: value => dispatch(isLogin(value)),
});

export default connect(null, mapDispatchToProps)(Login)
