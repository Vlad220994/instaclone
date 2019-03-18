import React from 'react';
import ReactDOM from 'react-dom';

import Table from './admin-table';
import usersData from '../../data/users-data.js';
import './admin-page.css';

const Admin = () => {
  return(
    <header>
      <h2>Admin Page</h2>
      <h3>Number of accounts { usersData.length }</h3>
      <Table />
    </header>
  );
};

ReactDOM.render(<Admin />, document.getElementById('root'));

export default Admin;