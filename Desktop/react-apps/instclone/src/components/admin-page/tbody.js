import React from 'react';

import TableData from './table-data';
import usersData from '../../data/users-data';
import './admin-page.css';

const TBody = () => {
  const elements = usersData.map((item) => {
    return (
      <tr>
        <td>
          <TableData data={ item.firstName } />
        </td>
        <td>
          <TableData data={ item.lastName } />
        </td>
        <td>
          <TableData data={ item.eMail } />
        </td>
        <td>
          <TableData data={ item.removeRequest } />
          <button type="button"
                  className="btn btn-outline-danger btn-sm"
                  disabled={!item.removeRequest}>
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    );
  });
  
  return (
    <tbody>
      { elements }
    </tbody>
  );
};

export default TBody;