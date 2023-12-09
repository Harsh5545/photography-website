import React from 'react'
import './HomeCustomer.css'
import CountUp from 'react-countup'
import IMG2 from '../../../images/aboutImg.jpg'
function HomeCustomer() {
    const countUpStyle = {
        fontSize: '2rem',
        fontWeight: "800",
       
    }
  return (
     
          <div className="customer-container">
              <div className="left">
                  <h1>
                  Nurtured to perfection
                  </h1>
              <div className="customer-content">
              <span className='counters'>
                      <CountUp style={ countUpStyle}  start={20} end={55} duration={6} />
                  <span className='plus'>+</span>
                  <h1>CITIES TRAVELLED</h1>
                  <p>Spread across the globe.</p>
                  </span>
                  <span className='counters'>
                      <CountUp style={ countUpStyle}  start={300} end={500} duration={6} />
                  <span className='plus'>+</span>
                  <h1>HAPPY COUPLES</h1>
                  <p>Hailing from varied cultures, regions and religions.</p>
                  </span>
                  <span className='counters'>
                      <CountUp style={ countUpStyle}  start={50000} end={100000} duration={6} />
                  <span className='plus'>+</span>
                  <h1>PHOTOS DELIVERED</h1>
                  <p>Edited pictures of life defining moments.</p>
                  </span>
                  <span className='counters'>
                      <CountUp style={ countUpStyle} start={100} end={200} duration={6} />
                  <span className='plus'>+</span>
                  <h1>VIDEOS PRODUCED</h1>
                  <p>Edited videos that are a real tribute to love and companionship.</p>
                  </span>
                </div>
              </div>
          <div className="right">
              <img src={IMG2} alt=''/>
              </div>
          </div>
    
  )
}

export default HomeCustomer