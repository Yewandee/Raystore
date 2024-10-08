import React from 'react'
import Sdata from './storedata'
import './serums.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Store = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
    }

    const SDataValue = Sdata.shopItems

    return (
        <div className='product'>
            <Slider {...settings}>
                {SDataValue.map((val) => {
                    console.log("val", val)
                    return (
                        <div className='staticImageFrame'>
                            <div className='staticSingleFrame' key={val.id}>
                                <div className='imgContainer'>
                                    <img src={val.cover} alt='cover' className='imageContainer' />
                                </div>
                                <h4>{val.name}</h4>
                                <span>${val.price}</span>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Store