// Home.js
import React, { useRef, useState } from 'react';
import { Carousel, Button } from 'antd';
// import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'; // Import arrow icons
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Navbar from '../../Components/Navbar'; // Make sure to replace with the correct path

import './Hero.css';

const Hero = () => {
  const ref = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    ref.current.next()
  };

  const handlePrevSlide = () => {
    ref.current.prev()
  };

  return (
    <div className="home">
      {/* <Navbar /> */}
      <Carousel
        
        effect="fade"
        beforeChange={(_, to) => setCurrentSlide(to)}
        dotPosition="bottom"
        className='carousal1'
        ref={ref}
      >
        <div className="slide slide1">
        <div className='slide-Middle'>
          <h1>Wedding Photography</h1>
          <p>Capturing Timeless Moments: Elevate your wedding memories with our exquisite photography, blending artistry, and emotion to tell your unique love story.</p>
            <button className='button'>Find More</button>
            </div>
        </div>
        <div className="slide slide2">
          <div className='slide-Middle'>
          <h1>Timeless Location</h1>
          <p>Discover the Perfect Venue: Our timeline location services guide you to breathtaking spaces, ensuring every moment of your event is framed in the beauty of a curated setting.</p>
          <button className='button'>Find More</button>
          </div>
         
        </div>
        <div className="slide slide3">
        <div className='slide-Middle'>
          <h1>Portfolio Building</h1>
          <p>Elevate Your Architectural Story: Explore our portfolio of building photography, where each image captures the essence of design excellence and showcases the artistry in every structure.</p>
          <button className='button'>Find More</button>
          </div>
          </div>
          
      </Carousel>
      <span className="control-button prev-button" onClick={handlePrevSlide}>
        <ArrowBackIosIcon sx={{ fontSize: 50 }} />
      </span>
      <span className="control-button next-button " onClick={handleNextSlide}>
        <ArrowForwardIosIcon sx={{ fontSize: 50 }} />
      </span>
    </div>
  );
};

export default Hero;
