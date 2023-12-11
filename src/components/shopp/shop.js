import React, { useState } from 'react'
import Sdata from './sdata'
import Slider from 'react-slick'
import ShopCart from './shopcart'
import './shop.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Shops = ({addToCart, shopItems}) => {
    const SDataValue = Sdata.shopItems
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (

        <div className='product'>

            {SDataValue.map((val) => {
                console.log("val", val)
                return (

                    <div className='staticImageFrame'>
                        <div className='staticSingleFrame' key={val.id}>
                            <div className='imgContainer'>
                                <img src={val.cover} alt='cover' className='imageContainer' />
                            </div>
                            <h5>{val.name}</h5>
                            <p>${val.price}.00</p>
                           
                        </div>
                        {/* <ShopCart addToCart={addToCart} shopItems={shopItems}/> */}
                    </div>

                )
            })}

        </div>

    )


}

export default Shops