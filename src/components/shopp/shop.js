import React, { useState } from 'react'
import Sdata from './sdata'
import Slider from 'react-slick'
import ShopCart from './shopcart'
import './shop.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from '../cart/cart'
import { useDispatch } from 'react-redux'
import { AddItemToCart, setCart } from '../../redux/reducer'
import Grid from '@mui/material/Grid';


const Shops = () => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const [CartItem, setCartItem] = useState([])

    console.log(`Cart==>`, CartItem)


    // const addToCart = (product) => {
    //     const productExit = CartItem.find((val) => val.id === product.id)
    //     if (productExit) {
    //         setCartItem(CartItem.map((val) => (val.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : val)))
    //     } else {
    //         setCartItem([...CartItem, { ...product, qty: 1 }])
    //     }
    // }
    const addToCart = (product) => {
        dispatch(AddItemToCart(product))
    }
    const SDataValue = Sdata.shopItems
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 7,
    //     slidesToScroll: 1,
    //     autoplay: true,
    // }

    return (

        <div className='product my-5'>

            {SDataValue.map((val) => {
                // console.log("val", val)
                return (
                    <Grid container spacing={2}>

                    <div key={val.id}>
                            <Grid item xs={12} md={4}>
                            <div className='staticImageFrame'>
                                <div className='staticSingleFrame' >

                                    <div className='imgContainer'>
                                        <img src={val.cover} alt='cover' className='imageContainer' />
                                        <div className='product-like'>
                                            <label>{count}</label> <br />
                                            <i className='fa-regular fa-heart' onClick={increment}></i>
                                        </div>

                                    </div>

                                    <h5>{val.name.toUpperCase()}</h5>
                                    <p>${val.price}.00</p>


                                    <div className='product-details'>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className='price'>

                                            <button onClick={() =>
                                                addToCart(val)
                                            }>
                                                <i className='fa fa-plus' ></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </Grid >
                        </div>
                        </Grid>
                )
            })}

        </div>

    )


}

export default Shops