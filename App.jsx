import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Pages/cart'; // Capitalized component name
import Loginsignup from './Pages/loginsignup'; // Capitalized component name
import Product from './Pages/product'; // Capitalized component name
import Shop from './Pages/shop'; // Capitalized component name
import Shopcategory from './Pages/shopcategory'; // Capitalized component name
import Footer from './Footer/Footer';
import men_banner from './components/assets/Assets/Frontend_Assets/banner_mens.png';
import kid_banner from './components/assets/Assets/Frontend_Assets/banner_kids.png';
import women_banner from './components/assets/Assets/Frontend_Assets/banner_women.png';
import ShopContextProvider from './context/Shopcontext';

function App() {
  return (
    <ShopContextProvider>
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<Shopcategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<Shopcategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<Shopcategory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Loginsignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    </ShopContextProvider>
  );
}

export default App;
