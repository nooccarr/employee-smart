import React, { useState, useEffect } from 'react';
import Search from './components/search.jsx';

const App = () => {
  const [employees, setEmployees] = useState([]);

  return (
    <div>
      <h1>employee smart</h1>
      <Search />


    </div>
  );
};

export default App;