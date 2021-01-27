import React, { useEffect, useState } from 'react';

const Search = ({ getEmployeeByName }) => {
  const [text, setText] = useState('');

  const handleClickButton = (e) => {
    e.preventDefault();
    getEmployeeByName(text);
  };

  return (
    <div>
      <form>
        {console.log(text)}
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
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