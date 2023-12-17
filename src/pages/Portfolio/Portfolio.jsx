import React, { useEffect, useState } from 'react'
import PortfolioComponent from '../../Components/PortfolioComponents/PortfolioComponents'
import Navbar from '../../Components/Navbar'
import './portfolio.css'
import Footer from '../../Components/Footer/Footer'
import Loader from '../../Components/Loader/Loader'
function Portfolio() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    setInterval(() => {
      setShow(false)
    },
      1000
    )
  }, [])
  return (
    <div>
      <Navbar />
      <div className='portfolio-sections'>
        <div className='portfolio-content'>
        <h1>Portfolio</h1>
          <p>Featured Photo Shoots</p>
        </div>
      </div>
      {
        show?<Loader/>:
        <PortfolioComponent />}
      <Footer/>
    </div>
  )
}

export default Portfolio