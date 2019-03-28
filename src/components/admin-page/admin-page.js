import React from 'react';

import Table from './admin-table';
import usersData from '../../data/users-data.js';
import './admin-page.css';

const Admin = () => {
  return(
    <header className="sticky">
      <h2>Admin Page</h2>
      <h3>Number of accounts { usersData.length }</h3>
      <Table />
    </header>
  );
};

export default Admin;