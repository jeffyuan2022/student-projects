// src/components/Search.js
import React from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search projects by title or author..."
      onChange={(e) => onSearch(e.target.value)}
      className="search-input"
    />
  );
};

export default Search;


