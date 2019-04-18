import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => (
  <form className="register-form">
    <div className="logo">
      <i className="fa fa-camera" />
    </div>
    <div>
      <h1>InstaClone</h1>
    </div>
    <div className="form-group">
      <input type="text" placeholder="First Name" />
    </div>
    <div className="form-group">
      <input type="text" placeholder="Last Name" />
    </div>
    <div className="form-group">
      <input type="email" placeholder="Email" />
    </div>
    <div className="form-group">
      <input type="password" placeholder="Password" />
    </div>
    <div className="form-group">
      <input type="password" placeholder="Confirm password" />
    </div>
    <button type="submit" className="btn btn-primary btn-left">Sign up</button>
    <div className="to-registration">
      Already registered?
      {' '}
      <Link to="/login">Login</Link>
    </div>
  </form>
);

export default Register;
