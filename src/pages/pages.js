import React from 'react'
import HomeSlide from '../components/home/homeslide'
import About from '../components/home/about'
import Wrapper from '../components/wrapper/wrapper'
import Shops from '../components/shopp/shop'



const Pages = () => {
    return (
        <section>
            <HomeSlide />
            <About />
            <Shops />
            <Wrapper/>
           
        </section>
    )
}

export default Pages