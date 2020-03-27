import React from 'react';

class Search extends React.Component {

  handleChange = (e) => {
    this.props.changeTheSearchTerm(e.target.value)
  }

  handleChangeCheck = (e) => {
    this.props.checkArray(e.target.value)
  }

  render() {
  return (
      <div>
    <div className="search">
      <input type="text" name="searchTerm"
        placeholder="search by name/experience"
        value={this.props.searchTerm}
        onChange={this.handleChange} 
      />
      </div>
      
      <div className="rating">
       <label htmlFor="rating">Sort By Rating:</label>
        <input type="checkbox" id="rating" name="rating"
        checked={this.props.checkBox} onChange={this.handleChangeCheck} 
        />
    </div>
    </div>
  );
}

}

export default Search;