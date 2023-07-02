import React from 'react';
import ImageItem from './ImageItem';

const ImageList = ({ images }) => {
  const top10Images = images.slice(0, 10); // Get the top 10 images

  return (
    <div className="image-list">
      {top10Images.map((image) => (
        <ImageItem key={image.date} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
