import React, { useState } from 'react';

const SearchForm = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm, 8); 
    setSearchTerm('');
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
