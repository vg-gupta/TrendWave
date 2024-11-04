import React from 'react';
import './popular.css';
import data_product from '../assets/Assets/Frontend_Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular in Women's</h1>
      <hr/>
      <div className="popular-items">
        {data_product.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
