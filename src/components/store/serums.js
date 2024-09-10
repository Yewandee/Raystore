import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./serum.css"
import Grid from '@mui/material/Grid';
import Sdata from '../shopp/sdata'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { AddItemToCart } from '../../redux/reducer';
import { useSelector } from "react-redux";
import { experimentalStyled as styled } from '@mui/material/styles';

const Serums = () => {
  const CartItem = useSelector((state) => state.recipe.CartItem)

  const dispatch = useDispatch()
  

  const addToCart = (product) => {
    dispatch(AddItemToCart(product))
    // console.log(`products clicked`,product)
  }

  const SDataValue = Sdata.shopItems
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

  return (

    <section className="serums">


      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{xs: 2, sm: 3, md: 4}} >
          {SDataValue.map((val, value) => (

            <Grid item xs={12} sm={6} md={4} key={value}>
              <Item>
                <div className="serum-container">
                  <img src={val.cover} alt={val.name} className="serum" />
                </div>
                <h5>{val.name.toUpperCase()}</h5>
                <p>₦{val.price}.00</p>
                <div className='product-details'>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>

                    <button onClick={() =>
                      addToCart(val)
                    }>
                      <i className='fa fa-plus' ></i>
                    </button>
                  </div>
                </div>
              </Item>
            </Grid>

          ))}


        </Grid>
      </Box>

    </section>

  )
}

export default Serums