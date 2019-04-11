import React from 'react';

import THead from './THead';
import TBody from './TBody';


const Table = data => (
  <table className="table">
    <THead />
    <TBody data={data} />
  </table>
);

export default Table;
