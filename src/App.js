import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pages from './pages/pages';
import About from './components/home/about.js';
import Contact from './components/contact/contact.js';
import Signin from './pages/signin/signin.js';
import Signup from './pages/signup/signup';
import Header from './components/header/header.js';
import Cart from './components/cart/cart.js';
import Footer from './components/footer/footer';
import Sdata from './components/shopp/sdata.js';
import Data from './components/Data.js';
import { AddItemToCart, RemoveItemfromCart } from './redux/reducer.js';
import { useDispatch } from 'react-redux';


function App() {

  const { productItems } = Data
  const { shopItems } = Sdata

 

  return (
    <section className="Container">
      <Router>
        <Header  />
        <Routes>
          <Route path="/" element={<Pages productItems={productItems} shopItems={shopItems} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart   />} />
        </Routes>
      </Router>

      <Footer />

    </section>
  );
}

export default App;
