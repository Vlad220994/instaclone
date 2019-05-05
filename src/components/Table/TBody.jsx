import React from "react";
import TableRowItem from "./TableRowItem";

const TBody = ({ data, onDeleted }) => (
  <tbody>
    {data.map(item => {
      const { id, firstName, lastName, eMail, removeRequest } = item;

      return (
        <tr key={id} className="table-row">
          <TableRowItem
            firstName={firstName}
            lastName={lastName}
            eMail={eMail}
            removeRequest={removeRequest}
            onDeleted={() => onDeleted(id)}
          />
        </tr>
      );
    })}
  </tbody>
);

export default TBody;
