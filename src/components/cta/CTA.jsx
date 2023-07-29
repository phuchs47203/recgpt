import React from 'react';
import './cta.css';

const CTA = () => {
  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className='gpt3__cta-btn'>
        <button type='button'><a href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home">Get Started</a></button>
      </div>
    </div>
  )
}

export default CTA;