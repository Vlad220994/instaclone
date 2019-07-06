import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../Posts/Search';
import './header.scss';

const Header = () => {
  const activeUser = JSON.parse(localStorage.getItem('activeUser'));
  const header = (
    <header className="header-main">
      <Link to="/posts">
        <i className="fa fa-camera icon" />
      </Link>
      <Search />
      <div className="profile">
        <div className="half">
          <div htmlFor="profile" className="profile-dropdown">
            <img
              src={activeUser.avatar}
              alt="logo"
            />
            <span>{activeUser.eMail}</span>
            <button type="button">
              <i className="fa fa-user-times" />
            </button>
            <Link to="/login"><i className="fa fa-sign-out" /></Link>
          </div>
        </div>
      </div>
    </header>
  );

  return header;
};

export default Header;
