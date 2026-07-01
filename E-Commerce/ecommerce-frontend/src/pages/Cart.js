import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container">
      <h1>Your Shopping Cart</h1>
      <div style={{marginTop:'40px'}}>
        {cart.length === 0 ? (
          <p>Your cart is empty. Start shopping!</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} className="cart-row">
                <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
                  <img src={item.image} alt={item.name} style={{width:'80px', height:'80px', borderRadius:'8px', objectFit:'cover'}} />
                  <div>
                    <h4 style={{margin:0}}>{item.name}</h4>
                    <p style={{color:'#2563eb', fontWeight:'700'}}>${item.price}</p>
                  </div>
                </div>
                <button className="btn" style={{color:'#dc2626', background:'#fee2e2'}} onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            ))}
            <div style={{textAlign:'right', marginTop:'40px', borderTop:'2px solid #e2e8f0', paddingTop:'20px'}}>
              <h2>Total: ${total}</h2>
              <button className="btn btn-blue" style={{marginTop:'20px', width:'250px'}}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;