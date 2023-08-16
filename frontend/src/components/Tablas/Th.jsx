import React from 'react'

const Th = ({ children }) => {
  return (
    <th className="py-4 px-4">
      <span className="text-secondary p-0 d-inline-flex align-items-center me-2">
        {children}
      </span>
    </th>
  );
}

export default Th
