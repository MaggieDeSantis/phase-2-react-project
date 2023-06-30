//to search for images
import React, { useState } from 'react';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY&date=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Enter search term" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
