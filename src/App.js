import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pages from './pages/pages';
import About from './components/home/about.js';
import Signin from './pages/signin/signin.js';
import Signup from './pages/signup/signup';
import Header from './components/header/header.js';
import Cart from './components/cart/cart.js';
import Footer from './components/footer/footer';
import Sdata from './components/shopp/sdata.js';
import Data from './components/Data.js';


function App() {

  const { productItems } = Data
  const { shopItems } = Sdata

  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }

  }

  return (
    <section className="Container">
      <Router>
        <Header CartItem={CartItem}/>
        <Routes>
          <Route path="/" element={<Pages  productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>} />
          <Route path='/about' element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

      <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />

      <Footer />

    </section>
  );
}

export default App;
