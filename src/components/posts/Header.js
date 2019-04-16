import React from 'react';

import Search from './Search';

const Header = () => (
  <header className="header-main">
    <i className="fa fa-camera icon" />
    <Search />
    <div className="profile">
      <div className="half">
        <label htmlFor="profile2" className="profile-dropdown">
          <input type="checkbox" id="profile2" />
          <img src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png" alt="logo" />
          <ul>
            <li><span>profile-name</span></li>
            <li><a href="#">Add Post</a></li>
            <li><a href="#">Delete Account</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </label>
      </div>
    </div>
  </header>
);

export default Header;
