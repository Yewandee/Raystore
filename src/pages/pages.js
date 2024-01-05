import React, { useState } from 'react'
import HomeSlide from '../components/home/homeslide'
import About from '../components/home/about'
import Wrapper from '../components/wrapper/wrapper'
import Shops from '../components/shopp/shop'
import Contact from '../components/contact/contact'
import Cart from '../components/cart/cart'
import Checkout from '../components/checkout/checkout'



const Pages = () => {
    const [CartItem, setCartItem] = useState([])

    const addToCart = (product) => {
        console.log("cart-product", product)
        const productExit = CartItem.find((val) => val.id === product.id)

        if (productExit) {
            setCartItem(CartItem.map((val) => (val.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : val)))
        } else {
            setCartItem([...CartItem, { ...product, qty: 1 }])
        }
    }

    console.log('cart-item', CartItem)

    return (
        <section>
            <HomeSlide />
            <About />
            <Shops />
            <Wrapper />
            <Cart addToCart={addToCart} />
            <Contact />
            {/* <Checkout /> */}

        </section>
    )
}

export default Pages