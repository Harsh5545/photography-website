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
  500: 2,
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
        <h3>Select Catgory:</h3>
      <div className="portfolio-container">
 <svg className="icon" viewBox="0 0 100 100">
    <path d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z" class="svg-stroke"></path>
 </svg>
 <select className="select" onChange={(e)=> handleCategoryChange(e.target.value)}>
   
 <option value="all">All</option>
 <option value="wedding">Wedding</option>
        <option value="fashion">Fashion</option>
        <option value="lifestyle">Lifestyle</option>
        <option value="realestate">Real Estate</option>
        </select>
</div>
      </div>
      <div className="categories1">
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
