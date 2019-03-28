import React from 'react';

import THead from './thead';
import TBody from './tbody';
import usersData from '../../data/users-data';
import './admin-page.css';

const Table = () => {
  return (
    <table className="table">
      <THead />
      <TBody />
    </table>
  );
};

localStorage.setItem('usersData', JSON.stringify(usersData));

export default Table;