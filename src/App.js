import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; 
import About from './components/About';
import Products from './components/products';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
