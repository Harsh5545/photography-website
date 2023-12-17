import React, { useRef, useState } from 'react';
import './ConatctComponent.css';
import emailjs from '@emailjs/browser';

function ConatctComponent() {
 const form = useRef();
 const [message, setMessage] = useState('');

 const sendEmail = (e) => {
    e.preventDefault();

    // Replace with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'service_gmre1gr';
    const templateId = 'template_ijqtu8v';
    const publicKey = 'Lwa5WZvrG1rdoAJnH';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setMessage('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        setMessage('Error sending message. Please try again.');
      }
    );
 };

 return (
    <div className='contact-fullcontainer'>
      <div className='Contcat-right'>
        <form ref={form} onSubmit={sendEmail} className='contact-us-form'>
          <h1>We're Ready to Work with You.<br/> Get in Touch</h1>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='from_name' required />

          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='reply_to' required />

          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message' required />

          <button className='conatct-submit-btn' type='submit'>Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      <div className='contact-left'>
        <img
          style={{ height: '25rem' }}
          src='https://res.cloudinary.com/duxc9clvh/image/upload/v1702036180/Portrait/DSC_9477_2_bfenvz.jpg'
          alt='portrait'
        />
      </div>
    </div>
 );
}

export default ConatctComponent;