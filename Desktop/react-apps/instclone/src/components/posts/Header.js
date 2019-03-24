import React from 'react';

import Search from './Search';
import ProfileLogo from './ProfileLogo';

const Header = () => {
  return (
    <header className="header-main">
      <i className="fa fa-camera icon"></i>
      <Search />
      <ProfileLogo />
    </header>
  );
};

export default Header;