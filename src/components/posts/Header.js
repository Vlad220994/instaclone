import React from 'react';

import Search from './Search';

const Header = () => (
  <header className="header-main">
    <i className="fa fa-camera icon" />
    <Search />
    <div className="avatar"></div>
  </header>
);

export default Header;
