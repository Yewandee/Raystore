import React from "react"
import { useEffect } from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Hdata from "./homedata"
import "./homslide.css"
import WOW from "wowjs";


const HomeSlide = () => {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (

    <>
      <Slider {...settings}>
        {Hdata.map((value, val) => {
          
          return (
            <div className='slider-item  wow fadeIn' data-wow-delay="0.3s" key={Hdata.id}>
              <div className='images'>

                <img
                  src={value.cover}
                  alt='Images'
                  style={{ objectFit: "cover", width: "100%", height: '100vh' }} />

                <div className="slide-content">
                  <h1 className=" wow fadeInUp" data-wow-delay="0.6s" >{value.title}</h1>
                  <h3 className="animated wow fadeInUp" data-wow-delay="0.9s">{value.desc}</h3>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
  
    </>
  )
}

export default HomeSlide