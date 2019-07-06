import React, { Component, Fragment } from "react";

import AllPosts from "../Posts/AllPosts";
import { Link, Redirect } from "react-router-dom";
import isLogin from "../../redux/actions/login"
import "./Login.scss";
import { connect } from "react-redux";
import { loadUsers, setActiveUser } from "../../redux/actions/users";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: false,
    isLogin: false
  };

  componentDidMount() {
    this.props.loadUsers();
  }

  handleChange = ({ target }) => {
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { users, setActiveUser } = this.props;
    const activeUser = users.filter(
        item => item.eMail === email && item.password === password
      );

    if (activeUser.length) {
      setActiveUser(activeUser[0]);
      this.setState({
          isLogin: true
      })
    } else {
      this.setState({
        error: true
      });
    }  
  };

  isDisabled = () => {
    const { email, password } = this.state;
    return !(email && password);
  };

  render() {
    const { email, password, error, isLogin } = this.state;
    
    return (
      <Fragment>
        {isLogin ? (<AllPosts /> && <Redirect to="/posts" />) : (
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

const mapStateToProps = (state) => {
  const { users } = state.usersReducer;
  return { users };
};

const mapDispatchToProps = dispatch => ({
  isLogin: value => dispatch(isLogin(value)),
  loadUsers: () => dispatch(loadUsers()),
  setActiveUser: activeUser => dispatch(setActiveUser(activeUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
