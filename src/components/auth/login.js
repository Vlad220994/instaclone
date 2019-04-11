import React from 'react';

import './Login.scss';

const Login = () => (
  <form className="login-form">
    <div className="logo">
      <i className="fa fa-camera" />
    </div>
    <div>
      <h1>InstaClone</h1>
    </div>
    <div className="form-group">
      <input type="email" placeholder="Email" />
    </div>
    <div className="form-group">
      <input type="password" placeholder="Password" />
    </div>
    <button type="submit" className="btn btn-primary btn-left">Login</button>
    <div className="to-registration">
      First time on InstaClone?
      {' '}
      <a href="register">Registration</a>
    </div>
  </form>
);

export default Login;
