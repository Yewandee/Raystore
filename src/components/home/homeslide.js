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
        {Hdata.map((value) => {
          console.log("value", value)
          return (
            <div className='slider-item  wow fadeIn' data-wow-delay="0.3s" key={Hdata.id}>
              <div className='img'>

                <img
                  src={value.cover}
                  alt='Image'
                  style={{ objectFit: "cover", width: "100%", height: '100vh' }} />

                <div className="slide-content">
                  <h1 className="animated slideInDown">{value.title}</h1>
                  <h3 className="animated slideInDown">{value.desc}</h3>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
      {/* <About/> */}
    </>
  )
}

export default HomeSlide