import React from 'react';

const EmployeeListEntry = ({ employee }) => {

  return (
    <div>
      <span>name: {employee.name}</span>
      <span>age: {employee.age}</span>
      <span>department: {employee.department}</span>
    </div>
  );
};

export default EmployeeListEntry;