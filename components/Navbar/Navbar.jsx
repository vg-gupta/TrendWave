import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../components/assets/logo.png';
import cart from '../../components/assets/cart.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setShowNavbar(false);
      } else if (scrollTop < lastScrollTop) {
        setShowNavbar(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${showNavbar ? '' : 'hidden'}`}>
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="image" />
        <p>TrendWave

</p>
      </div>

      <ul className="Nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kid</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="Nav-Login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart} alt="Cart" className="images" /></Link>
        <div className="Nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
