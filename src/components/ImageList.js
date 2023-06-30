import React from 'react';

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image) => (
        <div key={image.id} className="image-card">
          <img src={image.url} alt={image.title} />
          <h2>{image.title}</h2>
          <p>{image.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageList;