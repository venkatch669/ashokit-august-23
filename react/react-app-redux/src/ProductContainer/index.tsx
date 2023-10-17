import React from 'react';
import Product from '../Product';
import AddToCart from '../AddToCart';

function ProductContainer() {
  return (
    <div className="App">
        <AddToCart/>
        <Product/>       
    </div>
  );
}

export default ProductContainer;
