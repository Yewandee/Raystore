import React from 'react'

const Contact = () => {
    return (
        <section className='contact'>
            <div class="container-fluid justify-content-center">
                <div class="text-center mx-auto" style="max-width: 650px; font-weight: bold;">
                    <h3 class="section-title">CONTACT US</h3>
                    <h1 class="mb-5">If You Have Any Query, Please Feel Free to Contact Us</h1>
                </div>
                <div class="row g-5">
                    <div class="col-md-6 col-12 d-flex flex-column justify-content-between h-100">

                        <div class="col-12  bg-light d-flex align-items-center w-100 p-4 mb-4">
                            <div class="d-flex  align-items-center justify-content-center  bg-dark" style="width: 40px; height: 40px;">
                                <i class="fa fa-map-marker-alt" style="color:#B78D65"></i>
                            </div>
                            <div class="ms-4">
                                <p class="mb-2">Address</p>
                                <h4 class="mb-0">123 Street, Surulere, Lagos.</h4>
                            </div>
                        </div>

                        <div class="col-12 bg-light d-flex align-items-center w-100 p-4 mb-4">
                            <div class="d-flex  align-items-center justify-content-center bg-dark" style="width: 40px; height: 40px;">
                                <i class="fa fa-phone-alt" style="color:#B78D65"></i>
                            </div>
                            <div class="ms-4">
                                <p class="mb-2">Call Us Now</p>
                                <h4 class="mb-0">+2348158348908</h4>
                            </div>
                        </div>

                        <div class="col-12 bg-light d-flex align-items-center w-100 p-4 mb-4">
                            <div class="d-flex  align-items-center justify-content-center bg-dark" style="width: 40px; height: 40px;">
                                <i class="fa fa-envelope-open" style="color:#B78D65"></i>
                            </div>
                            <div class="ms-4">
                                <p class="mb-2">Mail Us Now</p>
                                <h4 class="mb-0">yewyytech@gmail.com</h4>
                            </div>
                        </div>

                    </div>
                    <form class="row row-cols-md-auto g-3 align-self-center w-auto">
                        <div class="col-md-6 col-12 text-left">
                            <div class="row g-3">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus in rem eos explicabo,
                                    dicta sed tempore earum ipsum, error maiores voluptatum.
                                    Ex minus eius iure repellendus eveniet! Inventore, molestias eaque?
                                </p>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="visually-hidden" for="name">Name</label>
                                        <input type="text" name="name" id="name" class="form-control rounded-0" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="visually-hidden" for="email">Email</label>
                                        <input type="text" name="email" id="email" class="form-control rounded-0" placeholder="Email" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="visually-hidden" for="subject">Email</label>
                                        <input type="text" name="subject" id="subject" class="form-control rounded-0" placeholder="Subject" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="visually-hidden" for="message">Message</label>
                                        <textarea class="form-control" placeholder="Message" id="message" style="height: 100px"></textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="button" class="butn btn btn-primary w-100">Send Message</button>
                                </div>
                            </div>


                        </div>
                    </form>
                </div>
            </div>

        </section >
    )
}

export default Contact