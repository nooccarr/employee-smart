import React from 'react';

const EmployeeListEntry = ({ employee }) => {

  return (
    <div className='employee-container'>
      <div className='employee-detail'>
        <div><strong>name:</strong> {employee.name}</div>
        <div><strong>age:</strong> {employee.age}</div>
        <div><strong>department:</strong> {employee.department}</div>
      </div>
    </div>
  );
};

export default EmployeeListEntry;