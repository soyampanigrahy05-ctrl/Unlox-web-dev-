import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Home = () => (
  <div>
    <div className="hero">
      <h1 style={{fontSize: '3.5rem', fontWeight:'800'}}>Elite Collections</h1>
      <p style={{fontSize: '1.2rem', margin: '15px 0 30px'}}>Upgrade your lifestyle with our premium curated products.</p>
      <button className="btn btn-blue" onClick={() => window.scrollTo({top: 650, behavior: 'smooth'})}>Explore Store</button>
    </div>
    <div className="container">
      <h2 style={{marginBottom:'30px'}}>Featured Products</h2>
      <div className="grid">
        {products.map(p => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.name} />
            <div style={{paddingTop:'15px'}}>
              <small style={{color:'#64748b', fontWeight:'700'}}>{p.category}</small>
              <h3 style={{margin:'5px 0'}}>{p.name}</h3>
              <p style={{color:'#2563eb', fontWeight:'800', fontSize:'1.2rem'}}>${p.price}</p>
              <Link to={`/product/${p.id}`} className="btn btn-outline" style={{width:'100%', textAlign:'center', marginTop:'15px'}}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default Home;