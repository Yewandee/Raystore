import React, { useState } from 'react';
import '../checkout/checkout.css';
import AddressForm from './addressForm';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Review from './review';
import Payment from './payment';

import Congratulations from "../../assets/images/congratulations.jpg"
import { Link } from 'react-router-dom';




const steps = ['Shipping address', 'Review your order', 'Payment Details'];

const Checkout = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };



    const [submittedData, setSubmittedData] = useState("");

    const handleFormSubmit = (formData) => {
        setSubmittedData(formData);
    };


    const getStepContent = (step) => {

        switch (step) {
            case 0:
                return <AddressForm onSubmit={handleFormSubmit} />;
            case 1:
                return <Review formData={submittedData} />;

            case 2:
                return <Payment />;
            default:
                throw new Error('Unknown step');
        }
    };

    return (
        <section className='checkout'>
            <div className='checkout_body'>
                <h2 className='checkout_font'>Checkout</h2>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                            Thank you for your order.
                        </Typography>
                        <div className='d-flex justify-content-center mt-5'>
                            <img src={Congratulations} className='w-50 ' />
                        </div>
                        <Link to="/">
                            <Button
                                variant="contained"
                                sx={{ mt: 3, ml: 1 }}
                            >HOME</Button>
                        </Link>

                    </React.Fragment>

                ) : (
                    <React.Fragment>
                        {getStepContent(activeStep)}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {activeStep !== 0 && (
                                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                    Back
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 3, ml: 1 }}
                            >
                                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                            </Button>


                        </Box>
                    </React.Fragment>
                )}

            </div>
        </section>
    )
}

export default Checkout