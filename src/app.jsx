import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Search from './components/search.jsx';
import EmployeeList from './components/employeeList.jsx';

const App = () => {
  const [employees, setEmployees] = useState([]);
  // useEffect(() => {}, []);

  const getEmployeeByName = (name, age, department) => {
    return Axios
      .get('/employees', {
        params: {
          name: name,
          age: age,
          department: department
        }
      })
      .then(({ data }) => {
        if (typeof data === 'object') {
          setEmployees(data);
        } else {
          setEmployees([]);
        }
      })
      .catch(err => console.log(err));
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