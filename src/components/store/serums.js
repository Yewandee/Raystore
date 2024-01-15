import React from "react"
// import Shop from "./shop"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./serum.css"
import Grid from '@mui/material/Grid';
import Sdata from "./storedata";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';


const Serums = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (

    <section className="serums">

      {Sdata.map((val, value) => {
        return (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {Array.from(Array(2)).map((_, value) => (

                <Grid item xs={2} sm={4} md={4} key={value}>
                  <Item>
                    <div className="serum-container">
                      <img src={val.cover} alt={val.name} className="serum" />

                    </div>
                  </Item>
                </Grid>
              ))}


            </Grid>
          </Box>

        )
      })}

      {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))}
      </Grid> */}

    </section>
    // <section className='NewArrivals background'>
    //   <div className='container'>
    //     <div className='heading d_flex'>
    //       <div className='heading-left row  f_flex'>
    //         <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
    //         <h2>New Arrivals </h2>
    //       </div>
    //       <div className='heading-right row '>
    //         <span>View all</span>
    //         <i className='fa-solid fa-caret-right'></i>
    //       </div>
    //     </div>

    //     {/* <Shop /> */}
    //   </div>
    // </section>
  )
}

export default Serums