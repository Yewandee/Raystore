import React from 'react'
import Sdata from './shopdata'
import 'bootstrap/dist/css/bootstrap.min.css'

const Shop = () => {
    <div className='content grid product'>
        {Sdata.map((val) => {
            console.log("val", val)
            return (
                <div className='box' >
                    <div className='img'>
                        <img src={val.cover} alt='' />
                    </div>
                    <h4>{val.name}</h4>
                    <span>${val.price}</span>
                </div>
            )
        })}

        
    </div>
}

export default Shop