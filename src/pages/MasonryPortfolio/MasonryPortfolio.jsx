import React from 'react';
import Masonry from 'react-masonry-css';
import './MasonryPortfolio.css';  

const MasonryPortfolio = ({ photos }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 3,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid-column"
    >
      {photos.map((photo, index) => (
        <div key={index} className="masonry-grid-item">
          <img loading='lazy' src={photo.url} alt={`Photo ${index}`} />
          <a class="cursor-eye" href="gallery-masonry-4-cols.html"> </a>
          <p className='text-overlay'>{photo.text}</p>
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryPortfolio;
