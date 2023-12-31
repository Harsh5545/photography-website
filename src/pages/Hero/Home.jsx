
import React, { useCallback, useEffect, useRef, useState} from 'react';
import { Carousel } from 'antd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const ref = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    ref.current.next()
  };

  const handlePrevSlide = () => {
    ref.current.prev()
  };
  const navigate = useNavigate()

  const autoAdvanceSlide = useCallback(() => {
    const nextSlide = (currentSlide + 1) % 3; // Assuming you have 3 slides
    setCurrentSlide(nextSlide);
    ref.current.goTo(nextSlide);
  }, [currentSlide]);

  useEffect(() => {
    // Set a timer to automatically advance the slide every 5 seconds (adjust as needed)
    const timer = setTimeout(autoAdvanceSlide, 5000);

    // Clear the timer when the component unmounts or when the currentSlide changes
    return () => clearTimeout(timer);
  }, [autoAdvanceSlide]);

  return (
    <div className="home">
    
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
            <button className='button' onClick={()=>navigate("/contact")}>Find More</button>
            </div>
        </div>
        <div className="slide slide2">
          <div className='slide-Middle'>
          <h1>Timeless Location</h1>
          <p>Discover the Perfect Venue: Our timeline location services guide you to breathtaking spaces, ensuring every moment of your event is framed in the beauty of a curated setting.</p>
          <button className='button' onClick={()=>navigate("/contact")}>Find More</button>
          </div>
         
        </div>
        <div className="slide slide3">
        <div className='slide-Middle'>
          <h1>Portfolio Building</h1>
          <p>Elevate Your Architectural Story: Explore our portfolio of building photography, where each image captures the essence of design excellence and showcases the artistry in every structure.</p>
          <button className='button' onClick={()=>navigate("/contact")}>Find More</button>
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
