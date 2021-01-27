import React, { useState, useEffect } from 'react';
import Search from './components/search.jsx';
import EmployeeList from './components/employeeList.jsx';
import employee_data from './sample.js';

const App = () => {
  const [employees, setEmployees] = useState([]);
  // useEffect(() => {}, []);

  const getEmployeeByName = (name, age, department) => {
    // make axios call to DB
    let employees = [];
    for (let i = 0; i < employee_data.length; i++) {
      name = name.toLowerCase();
      let employeeName = employee_data[i].name.toLowerCase().slice(0, name.length);
      if (age && age !== employee_data[i].age) {
        continue;
      } else if (department && department !== employee_data[i].department) {
        continue;
      }
      if (employeeName === name) {
        employees.push(employee_data[i]);
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