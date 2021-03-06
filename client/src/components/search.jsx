import React, { useEffect, useState } from 'react';
import ageGenerator from '../../utils/ageGenerator.js';

const departments = ['All', 'Film', 'Music', 'Sports'];
const ages = ageGenerator();

const Search = ({ getEmployeeByName }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [department, setDepartment] = useState(null);

  const handleClickButton = (e) => {
    e.preventDefault();
    getEmployeeByName(name, age, department);
  };

  return (

    <form>
      <div className='search-container'>
        <select
          className='age-filter'
          onChange={(e) => {
            {e.target.value === 'All' ?
            setDepartment(null) :
            setDepartment(e.target.value)}
          }
        }>
          {departments.map((dept, i) => {
            return <option key={i} value={dept}>{dept}</option>
          })}
        </select>
        <select
          className='department-filter'
          onChange={(e) => {
            {e.target.value === 'All' ?
            setAge(null) :
            setAge(Number(e.target.value))
          }
        }}>
          {ages.map((age, i) => {
            return <option key={i} value={age}>{age}</option>
          })}
        </select>
        <input
          className='search-bar'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Example: Serena Williams'
        />
      </div>
      <div className='button-container'>
        <button
          className='search-button'
          onClick={(e) => handleClickButton(e)}
        >search</button>
      </div>
    </form>

  );
};

export default Search;