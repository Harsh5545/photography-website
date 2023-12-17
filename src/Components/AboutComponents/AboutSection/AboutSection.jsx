import React, { useEffect } from 'react';
import './AboutSection.css';

function AboutSection() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const aboutSection = document.querySelector('.AboutSection');
//       const scrollY = window.scrollY;

//       if (scrollY > aboutSection.offsetTop - window.innerHeight / 2) {
//         aboutSection.classList.add('scroll-animation');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

  return (
    <div className='AboutSection'>
      <div className='AboutSectionLeft'>
        <h2>About Us</h2>
        <p>
          Welcome to Infinite Focus Creation, where we transform moments into everlasting memories. As a premier
          photography studio, we specialize in capturing the essence of your most cherished occasions, offering a
          spectrum of services including wedding, portrait, fashion, lifestyle, real estate, e-commerce, and captivating
          video ads.
          <br />
          <br />
          Our team of skilled photographers is dedicated to translating your vision into stunning visuals, ensuring
          every frame tells a unique story. With a passion for creativity and a commitment to excellence, we bring
          professionalism and artistry to every project.
          <br />
          <br />
          At Infinite Focus Creation, we pride ourselves on delivering high-quality, personalized photography and
          videography services tailored to meet your diverse needs. Whether it's a joyous wedding celebration, a
          captivating fashion shoot, or a compelling video ad, we are here to exceed your expectations.
          <br />
          <br />
          Explore the artistry, professionalism, and innovation that define [Your Studio Name]. Let us be the visual
          storytellers for your moments that matter. Contact us today and let's create something extraordinary together!
        </p>
      </div>
      <div className='AboutSectionRight'>
        <img
          // style={{ height: '25rem' }}
          src='https://res.cloudinary.com/duxc9clvh/image/upload/v1702036176/Portrait/DSC_9414_1_heggh0.jpg'
          alt='portrait'
        />
          </div>
          
    </div>
  );
}

export default AboutSection;
