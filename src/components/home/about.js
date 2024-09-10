import React from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/about.css'
import WOW from "wowjs";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";


const About = () => {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, []);


    return (
        <div>

            <div className="container-fluid py-5 my-5">
                <div className="row align-">
                    <div className="col-12 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img">
                            <img src={img4} alt="About 1" srcset="" />
                            <img src={img5} alt="About 2" srcset="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 about-text wow fadeIn" data-wow-delay="0.5s" >
                        <h4 className="section-title">ABOUT US</h4>
                        <h2>Your One Stop Store for all things Skincare</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus in rem eos explicabo,
                            dicta sed tempore earum ipsum, error maiores voluptatum.
                            Ex minus eius iure repellendus eveniet! Inventore, molestias eaque?
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus in rem eos explicabo,
                            dicta sed tempore earum ipsum, error maiores voluptatum.
                            Ex minus eius iure repellendus eveniet! Inventore, molestias eaque?
                        </p>

                        <a href="/">
                            <button className="btn">
                                Shop Now
                            </button>
                        </a>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default About