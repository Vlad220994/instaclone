import React from 'react';

import TableData from './TableData';
import './admin-page.css';

const TBody = () => {
  const usersData = JSON.parse(localStorage.getItem('usersData'));
  const elements = usersData.map(item => (
    <tr key={item.id}>
      <td>
        <TableData data={item.firstName} />
      </td>
      <td>
        <TableData data={item.lastName} />
      </td>
      <td>
        <TableData data={item.eMail} />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          disabled={!item.removeRequest}
        >
          <i className="fa fa-trash-o" />
        </button>
      </td>
    </tr>
  ));
  return (
    <tbody>
      {elements}
    </tbody>
  );
};

export default TBody;
