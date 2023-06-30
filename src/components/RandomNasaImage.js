import React, { useEffect, useState } from 'react';

function RandomNASAImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchRandomNASAImage = async () => {
      try {
        const API_KEY = 'REACT_APP_API_KEY';
        const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();
        setImageUrl(data.url);
      } catch (error) {
        console.log('Error fetching NASA image:', error);
      }
    };

    fetchRandomNASAImage();
  }, []);

  return (
    <div>
      <img id="banner-image" src={imageUrl} alt="NASA Banner" />
    </div>
  );
}

export default RandomNASAImage;
