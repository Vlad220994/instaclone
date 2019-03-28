import React from 'react';

import TableData from './table-data';
import usersData from '../../data/users-data';
import './admin-page.css';

const TBody = () => {
  const elements = usersData.map((item) => {
    return (
      <tr key={item.id}>
        <td>
          <TableData data={ item.firstName} />
        </td>
        <td>
          <TableData data={ item.lastName } />
        </td>
        <td>
          <TableData data={ item.eMail } />
        </td>
        <td>
          <button type="button"
                  className="btn btn-outline-danger btn-sm"
                  disabled={ !item.removeRequest }>
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