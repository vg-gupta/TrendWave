import React, { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import Productdisplay from '../components/Productdisplay/Productdisplay';
import Description from '../components/DescriptionBox/Description';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product}/>
      <Description/>
    </div>
  );
};

export default Product;
