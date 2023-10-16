import React from 'react'
import Sdata from './shopdata'
import './shop.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Shop = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <div className='container grid product '>
            <Slider {...settings}>
                {Sdata.map((val, value) => {
                    console.log("val", val)
                    return (
                        <div className='box' key={value}>
                            <div className='img'>
                                <img src={val.cover} alt='' style={{ width: '80px', height: '80px' }} />
                            </div>
                            <h4>{val.name}</h4>
                            <span>${val.price}</span>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Shop