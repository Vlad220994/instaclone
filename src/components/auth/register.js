import React from 'react';

const Register = () => (
  <form className="register-form">
    <div className="logo">
      <i className="fa fa-camera" />
    </div>
    <div>
      <h1>instaclone</h1>
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
  </form>
);

export default Register;
