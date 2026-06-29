import React from "react";
import './productcard.css';
import Btn from "./Button";
function Card(){
      return(
        <div className="product">
            <img src="https://images.pexels.com/photos/7180731/pexels-photo-7180731.jpeg" alt="cake"/>
            <h2>Cake</h2>
            <p>Rs 349</p>
            <Btn/>
            <button>Buy Now</button>
            
        </div>
    )
}
export default Card;