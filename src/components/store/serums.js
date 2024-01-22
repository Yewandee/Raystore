import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
// import Shop from "./shop"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./serum.css"
import Grid from '@mui/material/Grid';
import Sdata from "./storedata";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux'
import { AddItemToCart } from '../../redux/reducer'
import { experimentalStyled as styled } from '@mui/material/styles';


const Serums = () => {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)

  const addToCart = (product) => {
    dispatch(AddItemToCart(product))
  }
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
        <Grid container spacing={{ xs: 4, md: 4 }} >
          {Sdata.map((val, value) => (

            <Grid item xs={4} sm={4} md={4} key={value}>
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