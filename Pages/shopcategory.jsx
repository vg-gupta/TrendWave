import React, { useContext } from 'react';
import './CSS/Shopcategory.css';
import { ShopContext } from '../context/Shopcontext';
import dropdown_icon from '../components/assets/Assets/Frontend_Assets/dropdown_icon.png';
import Item from '../components/Item/Item';

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // console.log("all_product:", all_product);
  // console.log("props.category:", props.category);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="Category Banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        
        <div className="shopcategory-sort">
          <div className="shopcategory-sort-button">
            Sort by <img src={dropdown_icon} alt=""/>
          </div>
          <div className="shopcategory-sort-content">
            <a href="#">Price: Low to High</a>
            <a href="#">Price: High to Low</a>
            <a href="#">Newest Arrivals</a>
          </div>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default Shopcategory;
