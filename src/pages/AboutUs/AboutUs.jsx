import React from 'react'
import Navbar from '../../Components/Navbar'
import './about.css'
import AboutService from '../../Components/AboutComponents/AboutService/AboutService'
import AboutSection from '../../Components/AboutComponents/AboutSection/AboutSection'
import Footer from '../../Components/Footer/Footer'

function AboutUs() {
  return (
    <>
    <div className='about-contaier'>  <Navbar />
      <div className='heading'>
        <h1>About Us</h1>
        <p>infinite Focus Creation Photo Studio</p>
      </div>
      </div>
      <AboutService />
      <AboutSection />  
      <Footer/>
      <h1>Hello </h1>
    </>
  )
}

export default AboutUs
