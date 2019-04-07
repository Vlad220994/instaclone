import React from 'react';

import Table from '../Table/Table';
import './admin-page.scss';

const AdminPage = () => {
  const usersData = JSON.parse(localStorage.getItem('usersData'));
  return (
    <div className="admin-page">
      <header className="header-main">
        <h2>Admin Page</h2>
        <h3>{`Number of accounts ${usersData.length}`}</h3>
      </header>
      <Table data={usersData} />
    </div>
  );
};

export default AdminPage;
