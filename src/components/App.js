import React, { useState } from 'react';
import SearchForm from './SearchForm';
import ImageList from './ImageList';

const App = () => {
  const [images, setImages] = useState([]);

  const handleSearch = (searchTerm) => {
    // Make the API request using fetch or any other method
    // Here's an example using fetch:
    fetch(`https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY&date=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        // Update the images state with the fetched data
        setImages([data]);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
