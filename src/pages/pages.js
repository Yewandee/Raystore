import React from 'react'
import HomeSlide from '../components/home/homeslide'
import About from '../components/home/about'
import Shop from '../components/shop/shop'
import Wrapper from '../components/wrapper/wrapper'


const Pages = () => {
    return (
        <div>
            <HomeSlide />
            <About />
            <Shop />
            <Wrapper/>
        </div>
    )
}

export default Pages