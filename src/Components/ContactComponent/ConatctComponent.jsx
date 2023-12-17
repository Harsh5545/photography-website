import React from 'react'
import './ConatctComponent.css'
function ConatctComponent() {

    return (
        <div className='contact-fullcontainer'>
            <div className='Contcat-right'>
                
                <form className="contact-us-form">
                    <h1>We're Ready to Work with You.<br/> Get in Touch</h1>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" required />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" required />

    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" required />

    <button type="submit">Submit</button>
                </form>
            </div>
            <div className='contact-left'>
           
        <img
          style={{ height: '25rem' }}
          src='https://res.cloudinary.com/duxc9clvh/image/upload/v1702036180/Portrait/DSC_9477_2_bfenvz.jpg'
          alt='portrait'
        />
          
            </div>
            </div>
  )
}

export default ConatctComponent