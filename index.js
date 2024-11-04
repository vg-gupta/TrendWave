// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShopContextPovider from './context/Shopcontext';


ReactDOM.render(
  <React.StrictMode>
    <ShopContextPovider>
      <App />
      </ShopContextPovider>
  </React.StrictMode>,
  document.getElementById('root')
);
