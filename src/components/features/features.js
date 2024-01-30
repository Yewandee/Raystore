import React from 'react'
import './features.css'

import img1 from '../../assets/images/img14.jpg'
import img2 from '../../assets/images/img18.jpg'
import img3 from '../../assets/images/img19.jpg'

const Features = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-4 cardd wow fadeInUp' data-wow-delay="0.1s">
          <img src={img1} className='image'/>
        </div>
        <div className='col-12 col-md-4 cardd wow fadeInUp'data-wow-delay="0.3s">
          <img src={img2} className='image'/>
        </div>
        <div className='col-12 col-md-4 cardd wow fadeInUp'data-wow-delay="0.5s">
          <img src={img3} className='image'/>
        </div>

      </div>
    </ div>
  )
}

export default Features