import React from 'react';
import ImageItem from './ImageItem';

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image) => (
        <ImageItem key={image.date} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
