import React, { useState } from 'react'
import Sdata from './sdata'
import './shop.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux'
import { AddItemToCart, setCart } from '../../redux/reducer'
import Grid from '@mui/material/Grid';

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <i className='fa fa-long-arrow-alt-right'></i>
            </button>
        </div>
    )
}
const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i className='fa fa-long-arrow-alt-left'></i>
            </button>
        </div>
    )
}

const Shops = () => {

    const dispatch = useDispatch()
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    // const [CartItem, setCartItem] = useState([])

    // console.log(`Cart==>`, CartItem)

    const addToCart = (product) => {
        dispatch(AddItemToCart(product))
    }

    const SDataValue = Sdata.shopItems

    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (
        <section className='shops wow fadeIn' data-wow-delay='0.5s'>
            <Slider {...settings}>

                {SDataValue.map((val, value) => {
                    // console.log("val", val)
                    return (
                        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>

                            <div key={val.id}>
                                <Grid item xs={12} md={4} >
                                    <div className='staticImageFrame product'>
                                        <div className='staticSingleFrame' >

                                            <div className='imgContainer'>
                                                <img src={val.cover} alt='cover' className='imageContainer' />
                                                <div className='product-like'>
                                                    <label>{count}</label> <br />
                                                    <i className='fa-regular fa-heart' onClick={increment}></i>
                                                </div>

                                            </div>

                                            <h5>{val.name.toUpperCase()}</h5>
                                            <p>₦{val.price}.00</p>


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

            </Slider>
        </section>




    )


}

export default Shops