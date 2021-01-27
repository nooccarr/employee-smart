import React from 'react';
import EmployeeListEntry from './employeeListEntry.jsx';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      {employees.map((employee, i) => {
        {console.log(employee)}
        return <EmployeeListEntry key={i} employee={employee} />
      })}
    </div>
  );
};

export default EmployeeList;