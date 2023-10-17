import React, {useEffect, useState} from 'react';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { increaseAddToCartCount, fetchProducts } from "../features/addtocart/addtocartSlice"
function Product() {
  const dispatch:any =  useDispatch();
  const [data, setData] = useState<any>({});
  const productData = useSelector((state:any)=> state.addtocart.products)
  const addToCart = (product:any) =>{
    console.log(product);
    dispatch(increaseAddToCartCount());
  }
  useEffect(()=>{
    dispatch(fetchProducts())
    // fetch('https://dummyjson.com/products').then((res)=> res.json()).then((res)=>{
    //   setData(res);
    //   console.log(res);
    // })
  },[])
  return (
    <div className="App">
        <div className='card-container'>
            {productData?.products?.map((e:any)=><div className="card" key={e.id}>
                <div className="imgWrapper">
                  <img src={e.thumbnail}/>
                </div>
                <p>Title:{e.title}</p>
                <p>Description : {e.description}</p>
                <p>Price: {e.price}</p>
                <button onClick={(event)=>addToCart(e)}> Add To Cart</button>
            </div>)}
        </div>
    </div>
  );
}

export default Product;
