import React, {useState} from 'react'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from "react-redux";
import AddressForm from './addressForm';
// import '../checkout/checkout.css'
import Grid from '@mui/material/Grid';

const Review = ({ formData }) => {
    
    console.log(`form-data: ${formData}`);

    
    // const addresses = ['8 Crystal palace', 'Victoria Island', 'Lagos', '99999', 'Nigeria'];

    const CartItem = useSelector((state) => state.recipe.CartItem)
    const totalPrice = CartItem.reduce((total, { price, qty }) => {

        const itemPrice = parseInt(price) || 0;
        const itemQty = qty || 0;
        return total + itemQty * itemPrice;
    }, 0);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {CartItem.map((product) => (

                    <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.name.charAt(0).toUpperCase() + product.name.slice(1)} secondary={product.desc} />
                        <Typography variant="body2">₦{product.price}</Typography>
                    </ListItem>
                ))}
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ₦{totalPrice}.00
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>{formData.firstName} {formData.lastName} </Typography>
                    <Typography gutterBottom>{formData.address} {formData.addressTwo} {formData.city} {formData.state}
                        {formData.postal} {formData.country} </Typography>
                </Grid>
                {/* <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid> */}
            </Grid>
        </React.Fragment>
    )
}

export default Review