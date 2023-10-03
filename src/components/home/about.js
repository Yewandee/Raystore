import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/about.css'

import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";



const About = () => {
    return (
        <div>
            {/* <div className="container-xxl py-5 mt-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img" >
                                <img className="img-fluid" src={img4} alt="" />
                                <img className="img-fluid" src={img5} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h4 className="section-title">About Us</h4>
                            <h3 className="display-5 mb-4">RAYSTORE </h3>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                            <div className="d-flex align-items-center mb-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary" style={{ width: '120px', height: '120px' }}>
                                    <h1 className="display-1 mb-n2" data-toggle="counter-up">25</h1>
                                </div>
                                <div className="ps-4">
                                    <h3>Years</h3>
                                    <h3>Working</h3>
                                    <h3 className="mb-0">Experience</h3>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="container-fluid py-5 my-5">
                <div className="row align-">
                    <div className="col-12 col-md-6">
                        <div className="about-img">
                            <img src={img4} alt="" srcset="" />
                            <img src={img5} alt="" srcset="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 about-text" >
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

                
                        <a className="btn btn-primary py-3 px-5 butn" href="">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About