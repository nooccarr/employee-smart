import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Search from './components/search.jsx';
import EmployeeList from './components/employeeList.jsx';

const App = () => {
  const [employees, setEmployees] = useState([]);

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
    <React.Fragment>
      <div className='nav-bar'>
        <img
          className="nav-logo"
          src="./logo.png"
          width="50px"
          height="50px"
        />
        <h1 className='nav-title'>employee smart</h1>
      </div>
      {/* {console.log(employees)} */}
      <Search getEmployeeByName={getEmployeeByName} />
      <EmployeeList employees={employees} />
    </React.Fragment>
  );
};

export default App;