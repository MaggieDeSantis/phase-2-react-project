import React, { useEffect, useState } from 'react';

function Planets() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        'https://api.nasa.gov/planetary/apod?count=10&api_key=REACT_APP_API_KEY'
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div>
      <h2>Top 10 Recent Images - Planets</h2>
      <div className="image-list">
        {images.map((image) => (
          <div key={image.date}>
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
            <p>{image.date}</p>
            <p>{image.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Planets;
