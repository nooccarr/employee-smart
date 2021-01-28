import React from 'react';
import EmployeeListEntry from './employeeListEntry.jsx';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      {employees.map((employee, i) => {
        return <EmployeeListEntry key={i} employee={employee} />
      })}
    </div>
  );
};

export default EmployeeList;