import React, { useEffect, useState } from 'react';

const Stars = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
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

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Stars</h2>
      <div className="image-list">
        {images.map((image) => (
          <div key={image.date} className="image-item">
            <img src={image.url} alt={image.title} />
            <h3>{image.title}</h3>
            <p>{image.date}</p>
            <p>{image.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stars;
