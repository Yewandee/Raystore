import React, { useState } from 'react'
import Sdata from './sdata'
import './shop.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux'
import { AddItemToCart } from '../../redux/reducer'
import Grid from '@mui/material/Grid'

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Shops = () => {
    const dispatch = useDispatch()


    // State to track if a product has been liked or not
    const [likes, setLikes] = useState({});

    // Toggle like/unlike functionality for a specific product
    const toggleLike = (productId) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [productId]: !prevLikes[productId], // Toggle like status
        }));
    };
    

    const addToCart = (product) => {
        dispatch(AddItemToCart(product))
    }

    const SDataValue = Sdata.shopItems

    const settings = {
        dots: false,
        speed: 4000,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <section className='shops'>
            <Slider {...settings}>
                {SDataValue.map((val) => (
                    <Grid container spacing={2} key={val.id} className="product-grid">
                        <Grid item xs={12} md={4}>
                            <div className='staticImageFrame product'>
                                <div className='staticSingleFrame'>
                                    <div className='imgContainer'>
                                        <img src={val.cover} alt='cover' className='imageContainer' />

                                        <div className="product-like">
                                            
                                            <label>{likes[val.id] ? 1 : 0}</label>
                                            <br />
                                            <i
                                                className={`fa-regular fa-heart ${likes[val.id] ? 'liked' : ''}`} 
                                                onClick={() => toggleLike(val.id)} 
                                            ></i>
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
                                            <button onClick={() => addToCart(val)}>
                                                <i className='fa fa-plus'></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                ))}
            </Slider>
        </section>
    )
}

export default Shops
