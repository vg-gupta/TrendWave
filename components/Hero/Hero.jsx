import React from 'react';
import './Hero.css';
import hand from '../assets/hand.svg';
import arrow from '../assets/Assets/Frontend_Assets/arrow.png';
import hero from '../assets/hero1.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div className='hand-section'>
          <div className='hand-icon'>
            <p className='new-text'>new</p>
            <img src={hand} alt='hand icon' />
          </div>
          <p className='collection'>collections</p>
          <p className='everyone'>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt='arrow icon' />
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero} alt='hero' className='hero-img' />
      </div>
    </div>
  )
}

export default Hero;
