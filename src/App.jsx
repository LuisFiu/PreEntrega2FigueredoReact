import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; 
import About from './components/About';
import Products from './components/products';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { CartProvider } from './components/cartContext';
import Cart from './components/cart';
import Checkout from './components/Checkout';


import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_menssagingSenderId,
  appId: process.env.REACT_APP_appId
};

const app = initializeApp(firebaseConfig);

function App() {

  return (
    <Router>
      <CartProvider>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} /> 
            <Route path="/cart/" element={<Cart />} /> 
            <Route path="/checkout/" element={<Checkout />} /> 
          </Routes>
        </div>
      </CartProvider>
      <Footer />
    </Router>
  );
}

export default App;
