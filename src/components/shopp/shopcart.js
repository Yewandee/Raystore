import React, { useState } from "react"
import Sdata from './sdata'


const ShopCart = ({ shopItems, addToCart }) => {
  // const shopItemsValue = shopItems || [{}];
  // const shopItemsValue = Sdata.shopItems

  // shopItemsValue.forEach(shopItemsValue => {
  //   return Sdata.shopItems || [{}];
  // });
  // console.log("shopItems", shopItemsValue);

  const [count, setCount] = useState(0)
  const [addToCartIn, setAddToCart] = useState([])

  const increment = () => {
    setCount(count + 1)
  }

  const addToCartValue = () => {
    addToCart = setAddToCart(addToCartIn);
    console.log("1 Product added to cart", addToCart, addToCartIn);
  }

  return (
    <>
      {shopItems.map(shopItems => {
        console.log("shop", shopItems);
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                {/* <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div> */}
                <div className='price'>
            
                  <button onClick={() => addToCartValue(shopItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart