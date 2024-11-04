import React from 'react';
import './Offers.css';
import exclusive_image from '../assets/Assets/Frontend_Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>Only on Best Sellers Products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt='Exclusive Offer' className='offer-image'/>
      </div>
    </div>
  );
}

export default Offers;
