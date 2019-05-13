import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../Posts/Search';
import './header.scss';

const activeUser = JSON.parse(localStorage.getItem("activeUser"));

const Header = () => (
  <header className="header-main">
    <Link to="/posts">
      <i className="fa fa-camera icon" />
    </Link>
    <Search />
    <div className="profile">
      <div className="half">
        <label htmlFor="profile" className="profile-dropdown">
          <input type="checkbox" id="profile" />
          <img
            src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png"
            alt="logo"
          />
          <ul>
            <li>
              <span>{activeUser.eMail}</span>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </label>
      </div>
    </div>
  </header>
);

export default Header;
