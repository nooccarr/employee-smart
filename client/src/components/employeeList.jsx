import React from 'react';
import EmployeeListEntry from './employeeListEntry.jsx';

const EmployeeList = ({ employees }) => {
  return (
    <React.Fragment>
      {employees.map((employee, i) => {
        return <EmployeeListEntry key={i} employee={employee} />
      })}
    </React.Fragment>
  );
};

export default EmployeeList;