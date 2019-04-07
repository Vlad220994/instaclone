import React from 'react';

const TBody = (props) => {
  return (
    <tbody>
      {
        props.data.map(item => (
          <tr key={item.id}>
            <td>
              {item.firstName}
            </td>
            <td>
              {item.lastName}
            </td>
            <td>
              {item.eMail}
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
        ))
      }
    </tbody>
  );
};

export default TBody;
