import React from 'react';

import Table from './admin-table';
import './admin-page.css';

const Admin = () => {
  const usersData = JSON.parse(localStorage.getItem('usersData'));
  return(
    <header className="sticky">
      <h2>Admin Page</h2>
      <h3>Number of accounts { usersData.length }</h3>
      <Table />
    </header>
  );
};

export default Admin;