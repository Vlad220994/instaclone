import React from 'react';

import Table from './Table.jsx';
import './admin-page.css';

const AdminPage = () => {
  const usersData = JSON.parse(localStorage.getItem('usersData'));
  return ( <
    div className = "admin-page" >
    <
    header className = "sticky" >
    <
    h2 > Admin Page < /h2> <
    h3 >
    Number of accounts {
      usersData.length
    } <
    /h3> <
    /header> <
    Table / >
    <
    /div>
  );
};

export default AdminPage;