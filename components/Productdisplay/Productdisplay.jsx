import React from 'react';
import './Productdisplay.css';
import star_icon from '../assets/Assets/Frontend_Assets/star_icon.png';
import star_dull_icon from '../assets/Assets/Frontend_Assets/star_dull_icon.png';

const Productdisplay = (props) => {
    const { product } = props;
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} alt="" className="productdisplay-main-img" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdispaly-right-star">
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-price">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                Super Combed Cotton...
Fabric Composition: Cotton and Elastane
Regular Fit
Full Zip High Neck
                </div>
                <div className="productdisplay-rigth-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category :</span>Women , T-Shirt , Crop Top</p>
                <p className="productdisplay-right-category"><span>Category :</span>Modern, Latest</p>
            </div>
        </div>
    );
}

export default Productdisplay;
