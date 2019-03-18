import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return(
    <header>
      <h1>Welcome to InstClone</h1>
    </header>
  );
};

ReactDOM.render(<Header />, document.getElementById('root'));

export default Header;