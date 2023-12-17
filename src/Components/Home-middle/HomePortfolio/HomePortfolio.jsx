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
      // {
      //   url: 'https://res.cloudinary.com/duxc9clvh/image/upload/v1702032448/wedding/DSC_1330-01_uume5q.jpg',
      //   text: 'Moments Frozen in Time',
      // },
      // {
      //   url: 'https://res.cloudinary.com/duxc9clvh/image/upload/v1702032666/lifestyle/DSC_9036_gbkw1c.jpg',
      //   text: 'Lifestyle Adventures',
      // },
      // {
      //   url: 'https://res.cloudinary.com/duxc9clvh/image/upload/v1702032684/lifestyle/DSC_2081_j4npty.jpg',
      //   text: 'Every Frame a Masterpiece',
      // },
      // {
      //   url: 'https://res.cloudinary.com/duxc9clvh/image/upload/v1702036144/Portrait/DSC_5071_1_k1jtqi.jpg',
      //   text: 'Capturing Essence',
      // },
      // {
      //   url: 'https://res.cloudinary.com/duxc9clvh/image/upload/v1702032704/lifestyle/DSC_7146_puyjj1.jpg',
      //   text: 'Life in Motion',
      // },
      // {
      //   url: 'https://res.cloudinary.com/duxc9clvh/image/upload/v1702032356/lifestyle/DSC_3229_em0axf.jpg',
      //   text: 'Journey Unveiled',
      // },
    ];
    

    return (
      <>
        <div className='portfolio'>
          <div className="portfolio-content-btn">
          <div><h4>Portfolio</h4>
          <h1>Selected Work</h1></div>
          <button className='btn'>
              View All Work    </button>
              </div>
          {/* <div className="home-photos-container">
            {homePhotos.map((photo, index) => (
              <Link key={index} to={`/category/${photo.url}`} className="home-photo">
                <img src={photo.url} alt={`Photo ${index}`} />
                <p>{photo.text}</p>
              </Link>
            ))}
          </div> */}
            <MasonryPortfolio photos={homePhotos} />
        </div>
      </>
    );
  }

  export default HomePortfolio;
