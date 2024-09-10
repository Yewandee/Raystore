import React from "react";
import './cart.css'
import { useDispatch, useSelector } from "react-redux";
import { AddItemToCart, RemoveItemfromCart, DeleteItemfromCart } from "../../redux/reducer";
import { NavLink, } from 'react-router-dom';




const Cart = () => {

  const dispatch = useDispatch()

  const addToCart = (product) => {
    dispatch(AddItemToCart(product));
  }

  const decreaseQty = (product) => {
    dispatch(RemoveItemfromCart(product));

  }

  const handleDeleteFromCart = (product) => {
    dispatch(DeleteItemfromCart(product))
    // console.log("Deleting")
  };


  const CartItem = useSelector((state) => state.recipe.CartItem)
  const totalPrice = CartItem.reduce((total, { price, qty }) => {

    const itemPrice = price || 0;
    const itemQty = qty || 0;
    return total + (itemQty * itemPrice);

  }, 0);


  const isCartEmpty = CartItem.length === 0;


  return (
    <>
      <section className='cart-items mb-5'>
        <div className='container'>


          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items '>No Items are added in Cart</h1>}


            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              // console.log(`price`,item.price, `qty`, item.qty)

              return (
                <div className='cart-list d_flex' key={item.id}>
                  <div className='cart-image'>
                    <img src={item.cover} alt='Cart Image' />
                  </div>
                  <div className='cart-details'>
                  <h3 className="capitalize">{item.name}</h3>
                    <h4>
                      ₦{item.price}.00 * {+item.qty} <span>₦{productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart' onClick={() => handleDeleteFromCart(item)}>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>

                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      {item.qty}
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total'>
            <h2>Cart Summary</h2>
            <div className='d_flex'>
              <h4>Total Price :</h4>
              <h3>₦{totalPrice}.00</h3>
            </div>
          </div>


        </div>
        <div className="paybtn">

          {isCartEmpty ? (<p className="btn">Add items to your cart before proceeding to checkout</p>) :
            <NavLink className="btn  py-3 px-5 " to='/checkout'>Proceed to Checkout</NavLink>}

        </div>


      </section>
    </>
  )
}
export default Cart
