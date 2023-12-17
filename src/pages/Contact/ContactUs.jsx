import React from 'react'
import Navbar from '../../Components/Navbar'
import './ContactUs.css'
import ConatctComponent from '../../Components/ContactComponent/ConatctComponent'
import Footer from '../../Components/Footer/Footer'
function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className='contact-sections'>
        <div className='contact-content'>
        <h1>ContactUs</h1>
          <p>We're here to catch your event</p>
          </div>

      </div>
      <ConatctComponent />
      <Footer/>
    </div>
  )
}

export default ContactUs