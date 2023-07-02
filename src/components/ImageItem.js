import React from 'react';

const ImageItem = ({ image }) => {
  return (
    <div className="image-item">
      <img src={image.url} alt={image.title} />
      <h3>{image.title}</h3>
      <p>Date: {image.date}</p>
    </div>
  );
};

export default ImageItem;
