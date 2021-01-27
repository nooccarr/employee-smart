import React, { useEffect, useState } from 'react';
import ageGenerator from '../utils/ageGenerator.js';

const departments = ['All', 'Film', 'Music', 'Sports'];
const ages = ageGenerator();

const Search = ({ getEmployeeByName }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [department, setDepartment] = useState(null);

  const handleClickButton = (e) => {
    e.preventDefault();
    if (name) {
      getEmployeeByName(name, age, department);
    }
  };

  return (
    <div>
      <form>
        <select onChange={(e) => {
          {e.target.value === 'All' ?
          setDepartment(null) :
          setDepartment(e.target.value)}
        }}>
          {departments.map((dept, i) => {
            return <option key={i} value={dept}>{dept}</option>
          })}
        </select>
        <select onChange={(e) => {
          {e.target.value === 'All' ?
          setAge(null) :
          setAge(Number(e.target.value))}
        }}>
          {ages.map((age, i) => {
            return <option key={i} value={age}>{age}</option>
          })}
        </select>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={(e) => handleClickButton(e)}
        >
          search
        </button>
      </form>
    </div>
  );
};

export default Search;