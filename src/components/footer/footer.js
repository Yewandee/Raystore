import React from "react"
import { useEffect } from "react";
import '../footer/footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WOW from "wowjs";

const Footer = () => {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);

  return (
    <>
      <footer>
        <div className='container wow fadeIn' data-wow-delay="0.1s">
          <div className='row'>
            <div className='box col-lg-3 col-md-6'>
              <h1>RAYSTORE</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
              <div className='icon d_flex'>
                <div className='img d_flex'>
                  <i class='fa-brands fa-google-play'></i>
                  <span>Google Play</span>
                </div>
                <div className='img d_flex'>
                  <i class='fa-brands fa-app-store-ios'></i>
                  <span>App Store</span>
                </div>
              </div>
            </div>

            <div className='box col-lg-3 col-md-6'>
              <h2>About Us</h2>
              <ul>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className='box col-lg-3 col-md-6'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </div>
            <div className='box col-lg-3 col-md-6'>
              <h2>Contact Us</h2>
              <ul>
                <li>10 Adeniyi Jones, Victoria Island </li>
                <li>Email: raystore.help@gmail.com</li>
                <li>Phone: +2348158348908</li>
              </ul>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer
