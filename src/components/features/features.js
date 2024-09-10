import React from 'react'
import './features.css'

import img1 from '../../assets/images/img14.jpg'
import img2 from '../../assets/images/img18.jpg'
import img3 from '../../assets/images/img19.jpg'
import img4 from '../../assets/images/img20.jpg'


const Features = () => {
  return (
    <div className='features-container'>
      <div className='row'>
        <div className='col-sm-6 col-md-3 cardd wow fadeInUp' data-wow-delay="0.1s">
          <img src={img1} className='image' alt='Feature-Images'/>
        </div>
        <div className='col-sm-6 col-md-3 cardd wow fadeInUp'data-wow-delay="0.3s">
          <img src={img2} className='image' alt='Feature-Images'/>
        </div>
        <div className='col-12 col-md-3 cardd wow fadeInUp'data-wow-delay="0.5s">
          <img src={img3} className='image' alt='Feature-Images'/>
        </div>
        <div className='col-12 col-md-3 cardd wow fadeInUp'data-wow-delay="0.7s">
          <img src={img4} className='image' alt='Feature-Images'/>
        </div>

      </div>
    </ div>
  )
}

export default Features