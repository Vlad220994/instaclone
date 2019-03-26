import React from 'react';

import Search from './Search';
import RenderPropsMenu from './RenderPropsMenu';

const Header = () => {
  return (
    <header className="header-main">
      <i className="fa fa-camera icon"></i>
      <Search />
      <RenderPropsMenu />
    </header>
  );
};

export default Header;