import React, { useState } from 'react';
import './Description.css';

const Description = () => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigation">
        <div
          className={`description-nav-box ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => handleTabClick('description')}
        >
          Description
        </div>
        <div
          className={`description-nav-box ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => handleTabClick('reviews')}
        >
          Reviews (122)
        </div>
      </div>
      {activeTab === 'description' && (
        <div className="descriptionbox-content">
          <p><strong>TrendWave - Your One-Stop Shop for All</strong></p>
          <p>Welcome to TrendWave, where fashion meets convenience. Explore our extensive collection of stylish apparel and accessories for men, women, and kids. Whether you're looking for the latest trends or timeless classics, we have something for everyone. Enjoy a seamless shopping experience with our easy navigation, secure transactions, and exceptional customer service. At TrendWave, we prioritize quality and affordability, ensuring you get the best value for your money. Shop with us today and elevate your wardrobe with the trendiest outfits and accessories!</p>
        </div>
      )}
      {activeTab === 'reviews' && (
        <div className="descriptionbox-content reviews-scrollable">
          <div className="review">
            <p><strong>John Doe</strong> - Great quality and fast shipping!</p>
            <p><strong>Jane Smith</strong> - Love the variety of products available.</p>
            <p><strong>Sam Wilson</strong> - Customer service was very helpful.</p>
            <p><strong>Emily Johnson</strong> - Excellent shopping experience overall!</p>
            <p><strong>Chris Evans</strong> - Fast delivery and the product is as described.</p>
            <p><strong>Robert Brown</strong> - Affordable prices and good quality.</p>
            <p><strong>Lisa White</strong> - The website is easy to navigate and find products.</p>
            <p><strong>Mark Taylor</strong> - Highly recommend Shopper for online shopping!</p>
            <p><strong>Susan Green</strong> - Wide range of products to choose from.</p>
            <p><strong>James Harris</strong> - Satisfied with the overall service and product quality.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
