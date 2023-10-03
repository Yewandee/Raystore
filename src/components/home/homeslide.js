import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Hdata from "./homedata"
import "./homslide.css"


const HomeSlide = () => {
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
            <div className='slider-item' key={Hdata.id}>
              <div className='img'>

                <img
                  src={value.cover}
                  alt='Image'
                  style={{ objectFit: "cover", width: "100%", height: '100vh' }} />

                <div className="slide-content">
                  <h1>{value.title}</h1>
                  <h3>{value.desc}</h3>
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