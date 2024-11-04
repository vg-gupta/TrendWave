import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt={props.name} /></Link>
        <div className='item-details'>
            <p className='item-name'>{props.name}</p>
            <div className="item-price-container">
                <div className="item-price new">${props.new_price}</div>
                <div className="item-price old">${props.old_price}</div>
            </div>
        </div>
    </div>
  );
}

export default Item;
