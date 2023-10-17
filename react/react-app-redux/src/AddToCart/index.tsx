import React from 'react';
import { useSelector } from 'react-redux';
import CartIcon from "../images/pngtree-shopping-cart-convenient-icon-image_1287807.jpg"
import './index.css';
function AddToCart() {
  const productCounter = useSelector((state:any)=> state.addtocart.productCount);
  const productData = useSelector((state:any)=> state.addtocart.products);
  console.log(productData);
  const name = useSelector((state:any)=> state.name.val);
  return (
    <div className="addtocart">
        <div className='conatiner'>
          <h1> Flipkart </h1>
          <div className="icon">
            <span>{productCounter}</span>
            <img src={CartIcon}/>
          </div>
        </div>
    </div>
  );
}

export default AddToCart;
