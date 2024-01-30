import React from 'react'

import img1 from '../../assets/images/img14.png'

const Features = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-4 card'>
            <img src={img1} />        
        </div>
        <div className='col-12 col-md-4 card'>
        <img src={img1} />  
        </div>
        <div className='col-12 col-md-4 card'>
        <img src={img1} />  
        </div>
       
      </div>
    </ div>
  )
}

export default Features