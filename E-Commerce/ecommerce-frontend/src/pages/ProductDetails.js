import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="container"><h2>Product not found</h2></div>;

  return (
    <div className="container">
      <Link to="/" style={{textDecoration:'none', color:'#64748b', fontWeight:'600'}}>← Back to Shop</Link>
      <div className="detail-box" style={{marginTop:'30px'}}>
        <div className="detail-img">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-info">
          <span style={{color:'#2563eb', fontWeight:'700', textTransform:'uppercase'}}>{product.category}</span>
          <h1 style={{fontSize:'3rem', margin:'10px 0'}}>{product.name}</h1>
          <p style={{color:'#475569', fontSize:'1.1rem', lineHeight:'1.7', marginBottom:'30px'}}>{product.description}</p>
          <h2 style={{fontSize:'2.5rem', marginBottom:'30px'}}>${product.price}</h2>
          <button className="btn btn-blue" style={{padding:'15px 50px', fontSize:'1.1rem'}} onClick={() => { addToCart(product); alert("Added to Bag!"); }}>
            Add to Shopping Bag
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;