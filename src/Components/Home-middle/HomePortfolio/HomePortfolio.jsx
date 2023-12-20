  import React from 'react';
  import './HomePortfolio.css';
  import MasonryPortfolio from '../../../pages/MasonryPortfolio/MasonryPortfolio';

function HomePortfolio() {
  const homePhotos = [
    {
      url: 'https://res.cloudinary.com/duxc9clvh/image/upload/v1702032596/wedding/DSC_9839_rgixav.jpg',
      text: 'Eternal Love Captured',
    },
    {
      url: 'https://res.cloudinary.com/duxc9clvh/image/upload/v1702032701/wedding/DSC_6067_xzrclq.jpg',
      text: 'Cherishing the Vows',
    },
    {
      url: 'https://res.cloudinary.com/duxc9clvh/image/upload/v1702032528/lifestyle/DSC_3191_bfuuzi.jpg',
      text: 'Life in Every Frame',
    },
    {
      url: 'https://res.cloudinary.com/duxc9clvh/image/upload/v1702036178/Portrait/DSC_9414_vrbqo2.jpg',
      text: 'Portrait Elegance',
    },
    {
      url: 'https://res.cloudinary.com/duxc9clvh/image/upload/v1702032698/wedding/DSC_8907_ryj4pb.jpg',
      text: 'Whispers of Romance',
    },
    {
      url: 'https://res.cloudinary.com/duxc9clvh/image/upload/v1702036161/Portrait/1672825766856_dyu1ie.jpg',
      text: 'Untold Stories',
    },
  ]
    

    return (
      <>
        <div className='portfolio'>
          <div className="portfolio-content-btn">
          <div><h4>Portfolio</h4>
          <h1>Selected Work</h1></div>
          <button className='btn'>
              View All Work    </button>
              </div>
       
            <MasonryPortfolio photos={homePhotos} />
        </div>
      </>
    );
  }

  export default HomePortfolio;
