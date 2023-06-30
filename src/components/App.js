import React, { useState } from 'react';
import SearchForm from './SearchForm';
import ImageList from './ImageList';

const App = () => {
  const [images, setImages] = useState([]);

  const handleSearch = (searchTerm) => {
       fetch(`https://api.nasa.gov/planetary/apod?api_key=REACT_APP_API_KEY&date=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
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
