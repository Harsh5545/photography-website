import React, { useEffect } from 'react'
import './HomeCustomer.css'
import CountUp from 'react-countup'
import { Element } from 'react-scroll';
import IMG2 from '../../../images/aboutImg.jpg'
function HomeCustomer() {
    const countUpStyle = {
        fontSize: '2rem',
        fontWeight: "800",
       
    }
    useEffect(() => {
        // Add a scroll listener here to trigger CountUp animations when the section comes into view
        const handleScroll = () => {
            const counters = document.querySelectorAll('.counters');
            const windowBottom = window.scrollY + window.innerHeight;

            counters.forEach((counter) => {
                const counterTop = counter.offsetTop;
                if (windowBottom > counterTop) {
                    // Start CountUp animation
                    counter.classList.add('counted');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
     <Element name='homeCustomer' >
          <div className="customer-container">
              <div className="left">
                  <h1>
                  Nurtured to Perfection
                  </h1>
              <div className="customer-content">
              <span className='counters'>
                      <CountUp style={ countUpStyle}  start={20} end={55} duration={6} />
                  <span className='plus'>+</span>
                  <h2>CITIES TRAVELLED</h2>
                  <p>Spread across the globe.</p>
                  </span>
                  <span className='counters'>
                      <CountUp style={ countUpStyle}  start={300} end={500} duration={6} />
                  <span className='plus'>+</span>
                  <h2>HAPPY COUPLES</h2>
                  <p>Hailing from varied cultures, regions and religions.</p>
                  </span>
                  <span className='counters'>
                      <CountUp style={ countUpStyle}  start={50000} end={100000} duration={6} />
                  <span className='plus'>+</span>
                  <h2>PHOTOS DELIVERED</h2>
                  <p>Edited pictures of life defining moments.</p>
                  </span>
                  <span className='counters'>
                      <CountUp style={ countUpStyle} start={100} end={200} duration={6} />
                  <span className='plus'>+</span>
                  <h2>VIDEOS PRODUCED</h2>
                  <p>Edited videos that are a real tribute to love and companionship.</p>
                  </span>
                </div>
              </div>
          <div className="right">
              <img src={IMG2} alt=''/>
              </div>
      </div>
      </Element>
    
  )
}

export default HomeCustomer