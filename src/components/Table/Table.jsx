import React from 'react';

import THead from './THead';
import TBody from './TBody';


const Table = (props) => (
  <table className="table">
    <THead />
    <TBody data={props.data}/>
  </table>
);

export default Table;
