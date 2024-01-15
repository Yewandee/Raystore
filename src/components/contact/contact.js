import React from 'react'

const Contact = () => {
    return (
        <section className='contact mt-5 mb-5'>
            <div className="container-fluid justify-content-center " >
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '650px', fontWeight: 'bold' }}>
                    <h3 className="section-title">CONTACT US</h3>
                    <h1 className="mb-5">If You Have Any Query, Please Feel Free to Contact Us</h1>
                </div>
                <div className="row g-5">
                    <div className="col-md-6 col-12 d-flex flex-column justify-content-between h-100 wow fadeInUp" data-wow-delay="0.1s">

                        <div className="col-12  bg-light d-flex align-items-center w-100 p-4 mb-4">
                            <div className="d-flex  align-items-center justify-content-center  bg-dark" style={{ width: '40px', height: '40px' }}>
                                <i className="fa fa-map-marker-alt" style={{ color: '#B78D65' }}></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">Address</p>
                                <h4 className="mb-0">10 Adeniyi Jones, Victoria Island </h4>
                            </div>
                        </div>

                        <div className="col-12 bg-light d-flex align-items-center w-100 p-4 mb-4">
                            <div className="d-flex  align-items-center justify-content-center bg-dark" style={{ width: '40px', height: '40px' }}>
                                <i className="fa fa-phone-alt" style={{ color: '#B78D65' }}></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">Call Us Now</p>
                                <h4 className="mb-0">+2348158348908</h4>
                            </div>
                        </div>

                        <div className="col-12 bg-light d-flex align-items-center w-100 p-4 mb-4">
                            <div className="d-flex  align-items-center justify-content-center bg-dark" style={{ width: '40px', height: '40px' }}>
                                <i className="fa fa-envelope-open" style={{ color: '#B78D65' }}></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2"></p>
                                <h4 className="mb-0">raystore.help@gmail.com</h4>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-6 col-12 text-left wow fadeInUp" data-wow-delay="0.5s">
                        <form className="row row-cols-md-auto g-3 align-self-center w-auto">
                            <div className="row g-3">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus in rem eos explicabo,
                                    dicta sed tempore earum ipsum, error maiores voluptatum.
                                    Ex minus eius iure repellendus eveniet! Inventore, molestias eaque?
                                </p>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="visually-hidden" for="name">Name</label>
                                        <input type="text" name="name" id="name" className="form-control rounded-0" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="visually-hidden" for="email">Email</label>
                                        <input type="text" name="email" id="email" className="form-control rounded-0" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="visually-hidden" for="subject">Email</label>
                                        <input type="text" name="subject" id="subject" className="form-control rounded-0" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="visually-hidden" for="message">Message</label>
                                        <textarea className="form-control" placeholder="Message" id="message" style={{ height: '100px' }}></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="button" className="btn w-100">Send Message</button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>

        </section >
    )
}

export default Contact