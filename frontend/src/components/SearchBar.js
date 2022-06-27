import React, { useState } from 'react';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { prompt } = props;

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search for a {prompt}: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
