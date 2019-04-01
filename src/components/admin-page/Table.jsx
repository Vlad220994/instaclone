import React from 'react';

import THead from './THead';
import TBody from './TBody';
import usersData from '../../data/users-data';
import './admin-page.css';

const Table = () => (
  <table className="table">
    <THead />
    <TBody />
  </table>
);

localStorage.setItem('usersData', JSON.stringify(usersData));

export default Table;
