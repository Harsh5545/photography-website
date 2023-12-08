import React from 'react';
import Masonry from 'react-masonry-css';
import './MasonryPortfolio.css'; // Create this CSS file for styling

const MasonryPortfolio = ({ photos }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid-column"
    >
      {photos.map((photo, index) => (
        <div key={index} className="masonry-grid-item">
          <img src={photo.url} alt={`Photo ${index}`} />
          <p className='text-overlay'>{photo.text}</p>
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryPortfolio;
