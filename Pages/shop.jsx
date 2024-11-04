import React from 'react'
import Hero from '../components/Hero/Hero';
import Popular from '../components/popular/popular';
import Offers from '../components/Offers/Offers';
import Newcollection from '../components/Newcollection/Newcollection';
import Newsletter from '../components/Newsletter/Newsletter';
const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      <Newsletter/>

    </div>
  )
}

export default shop
