import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <form>
        <input type="search" placeholder="Search" className="input" />
        <button className="btn-search" type="submit"></button>
      </form>
    </div>
  );
};

export default Search;