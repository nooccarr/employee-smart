import React, { useState, useEffect } from 'react';
import Search from './components/search.jsx';
import EmployeeList from './components/employeeList.jsx';
import employee_data from './sample.js';

const App = () => {
  const [employees, setEmployees] = useState([]);
  // useEffect(() => {}, []);

  const getEmployeeByName = (employeeName) => {
    // make axios call to DB
    let employees = [];
    if (employeeName) {
      for (let i = 0; i < employee_data.length; i++) {
        let currentEmployee = employee_data[i].name.toLowerCase().slice(0, employeeName.length);
        employeeName = employeeName.toLowerCase();
        if (currentEmployee === employeeName) {
          employees.push(employee_data[i]);
        }
      }
    }
    setEmployees(employees);
  };

  return (
    <div>
      <h1>employee smart</h1>
      {console.log(employees)}
      <Search
        getEmployeeByName={getEmployeeByName}
      />
      <EmployeeList
        employees={employees}
      />

    </div>
  );
};

export default App;