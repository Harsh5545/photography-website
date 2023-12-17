import React from 'react'
import './AboutService.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRing, faPortrait,faNewspaper,faEdit, faTshirt, faVideo } from '@fortawesome/free-solid-svg-icons';
function AboutService() {
    const aboutServices = [
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
        },
        {
          id: 5,
          name: "Editorial",
          description: "Crafting Compelling Narratives Through Visually Striking Editorial Photography - Your Story, Our Lens.",
          icon: faNewspaper, // Font Awesome icon for editorial
        },
        {
          id: 6,
          name: "Retouch",
          description: "Enhancing Perfection: Impeccable Retouching Services to Elevate Your Visuals to New Heights.",
          icon: faEdit, // Font Awesome icon for retouch
        }
      ];
      
  return (
      <div className='aboutService'>
            <div className="AboutContent">
        {aboutServices.map((service) => (
          <div className='AboutContainer' key={service.id}>
            <FontAwesomeIcon icon={service.icon} size="2x" />
            <div className='Aboutservices'><h2>{service.name}</h2>
                    <p>{service.description}</p>
                    </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutService