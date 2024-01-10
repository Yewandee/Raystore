import React from 'react'
import Sdata from './storedata'
import './shop.css'
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

    return (
        <div className='product'>
            <Slider {...settings}>
                {Sdata.map((val) => {
                    console.log("val", val)
                    return (
                        <div className='staticImageFrame'>
                            <div className='staticSingleFrame' key={val.id}>
                                <div className='imgContainer'>
                                    <img src={val.cover} alt='cover' className='imageContainer' />
                                    {/* <img src={val.cover} alt='' style={{ width: '80px', height: '80px' }} /> */}
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