import React from 'react';

import THead from './thead';
import TBody from './tbody';
import './admin-page.css';

const Table = () => {
  return (
    <table className="table">
      <THead />
      <TBody />
    </table>
  );
};

export default Table;