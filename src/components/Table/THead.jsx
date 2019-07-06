import React from 'react';

const a = [
  { id: 1, name: 'First Name' },
  { id: 2, name: 'Second Name' },
  { id: 3, name: 'Email' },
  { id: 4, name: 'Remove Request' },
];

const THead = () => (
  <thead>
    <tr>
      {a.map(item => (
        <th key={item.id} className="sticky-header">
          {item.name}
        </th>
      ))}
    </tr>
  </thead>
);

export default THead;
