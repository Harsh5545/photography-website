import React, { useState, useEffect } from 'react';
// import { Image, Transformation } from 'cloudinary-react';
import Masonry from 'react-masonry-css';
import './PortfolioComponents.css';
import Navbar from '../Navbar';
import Footer from '../../Components/Footer/Footer';
import PhotoData from '../../PhotoData/PhotoData';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const allPhotos = Object.values(PhotoData).flat();

function PortfolioComponent() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [category, setCategory] = useState('all');
  const [imagePublicIds, setImagePublicIds] = useState([]);

  
  useEffect(() => {
    const selectedCategory = category === 'all' ? allPhotos : PhotoData[category];
    setImagePublicIds(selectedCategory.map((photo) => photo.path));
  }, [category]);

  
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="portfolio-section">
      <div className="categories">
        <button onClick={() => handleCategoryChange('all')}>All</button>
        <button onClick={() => handleCategoryChange('wedding')}>Wedding</button>
        <button onClick={() => handleCategoryChange('fashion')}>Fashion</button>
        <button onClick={() => handleCategoryChange('lifestyle')}>Lifestyle</button>
        <button onClick={() => handleCategoryChange('realestate')}>Real Estate</button>
      </div>
    
     
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        
      >
        {imagePublicIds.map((path, index) => (
          <img key={index} src={path} alt={`Photo ${index + 1}`} />
        ))}
        </Masonry>
        
    
    </div>
  );
}

export default PortfolioComponent;
