import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../Navbar'
import './ServicesComponent.css'; // Add your styling for the services page
import { useNavigate } from 'react-router-dom';

function ServiceComponent() {
  const navigate=useNavigate()
  return (
      <>
          <div className='Service-section'>
      <Navbar/>
      <div className='services-container'>
        <section className='services-intro'>
          <h1>Our Services</h1>
          <p>
            Infinite Focus Creation Photo Studio offers a comprehensive range of professional photography and videography services to capture and enhance your special moments.
          </p>
        </section>
        <section className='benefits-section'>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Experienced and skilled team of photographers and videographers.</li>
            <li>Personalized and creative approach to every project.</li>
            <li>High-quality images and videos that tell a story.</li>
           
          </ul>
        </section>
        <section className='service-offerings'>
          <div className='service-item'>
            <h2>Wedding Photography</h2>
            <p>
              Our expert photographers specialize in capturing timeless moments on your wedding day. From candid shots to traditional poses, we ensure every emotion is beautifully preserved.
            </p>
          </div>

          <div className='service-item'>
            <h2>Portrait Sessions</h2>
            <p>
              Elevate your personal and family portraits with our skilled photographers. We create stunning images that reflect your unique personality and style.
            </p>
          </div>

          <div className='service-item'>
            <h2>Event Coverage</h2>
            <p>
              Let us cover your special events, from birthdays to corporate gatherings. Our team ensures comprehensive event coverage, capturing the essence of every moment.
            </p>
          </div>

          <div className='service-item'>
            <h2>Video Ad Creation</h2>
            <p>
              Boost your brand with captivating video ads. Our video production team will craft engaging and effective advertisements tailored to your business needs.
            </p>
          </div>

          {/* Add more service items as needed */}
        </section>

    

                  <section className='cta-section'>
                      <div className='cta-container'>
          <h2>Ready to Capture Your Moments?</h2>
          <p>Contact us to discuss your photography and videography needs. We look forward to creating lasting memories and impactful visuals with you.</p>
         <button  className='button' onClick={()=>navigate("/contact")}>Get In Touch</button>
          </div>
                          {/* Add a CTA button or contact form */}
        </section>
      </div>

          <Footer />
          </div>
    </>
  );
}

export default ServiceComponent;
