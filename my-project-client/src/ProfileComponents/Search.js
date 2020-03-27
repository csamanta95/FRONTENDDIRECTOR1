import React from 'react';

const Search = (props) => {

  const handleChange = (e) => {
    props.changeTheSearchTerm(e.target.value)
  }

  return (
    <div>
      <input type="text" name="searchTerm"
        placeholder="search by name"
        value={props.searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;