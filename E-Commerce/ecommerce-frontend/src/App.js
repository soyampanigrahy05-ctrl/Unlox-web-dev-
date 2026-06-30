import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

const Header = () => {
  const { cart } = useCart();
  return (
    <header>
      <Link to="/" className="logo">UNLOX <span>%</span></Link>
      <nav style={{display:'flex', gap:'25px', alignItems:'center'}}>
        <Link to="/" className='btn btn-home'>Home</Link>
        <Link to="/cart" className="btn btn-blue">Cart ({cart.length})</Link>
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer>
    <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'40px', paddingBottom:'40px'}}>
      <div><h3>UNLOX</h3></div>
      <div><h3>Support</h3><p>Help Center</p></div>
      <div><h3>Contact</h3><p>info@unlox.com</p></div>
    </div>
    <p style={{textAlign:'center', opacity: 0.6}}>© 2025 UNLOX Academy Project</p>
  </footer>
);

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}
export default App;