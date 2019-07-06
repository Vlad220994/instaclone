import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../Posts/Search';
import './header.scss';

const activeUser = JSON.parse(localStorage.getItem('activeUser'));

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
            src={activeUser.avatar}
            alt="logo"
          />
          <span>{activeUser.eMail}</span>
          <button type="button">
            <i className="fa fa-user-times" />
          </button>
          <Link to="/login"><i className="fa fa-sign-out" /></Link>
        </label>
      </div>
    </div>
  </header>
);

export default Header;
