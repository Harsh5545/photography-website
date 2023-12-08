import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRing, faPortrait, faTshirt, faVideo } from '@fortawesome/free-solid-svg-icons';
import './HomeService.css';

function HomeService() {
  const services = [
    {
      id: 1,
      name: "Weddings",
      description: "Celebrate the Journey of Love with Timeless Moments Captured by Infinite Focus Creation",
      icon: faRing, // Font Awesome icon for weddings
    },
    {
      id: 2,
      name: "Portraits",
      description: "Individuality Blossoms in Every Click, Portraits That Tell Your Unique Story.",
      icon: faPortrait, // Font Awesome icon for portraits
    },
    {
      id: 3,
      name: "Fashion",
      description: "Where Style Meets Elegance, Our Lens Captures the Essence of Your Fashion Journey.",
      icon: faTshirt, // Font Awesome icon for fashion
    },
    {
      id: 4,
      name: "Video Ads",
      description: "Transforming Narratives into Dynamic Visual Spectacles - Ignite Your Story with Infinite Focus Creation.",
      icon: faVideo, // Font Awesome icon for video ads
    }
  ];

  return (
    <div className="section2">
      <div className="content">
        {services.map((service) => (
          <div className='services' key={service.id}>
            <FontAwesomeIcon icon={service.icon} size="2x" />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeService;
