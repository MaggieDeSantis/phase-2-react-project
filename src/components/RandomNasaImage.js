import React, { useEffect, useState } from 'react';

const RandomNASAImage = () => {
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
      );

      if (response.ok) {
        const data = await response.json();
        setRandomImage(data);
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Random NASA Image</h2>
      {randomImage && (
        <div>
          <img src={randomImage.url} alt={randomImage.title} />
          <h3>{randomImage.title}</h3>
          <p>{randomImage.date}</p>
        </div>
      )}
    </div>
  );
};

export default RandomNASAImage;
